import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { PaginatedResult, Pagination } from '../_models/pagination';
import { map } from 'rxjs/operators';
import { MemberListResolver } from '../_resolvers/member-list.resolver';
import { ActivatedRoute } from '@angular/router';



// const httpOptions = {
//   headers: new HttpHeaders({
//       Authorization : 'Bearer ' + localStorage.getItem('token')
//     })
// };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  bien1: Pagination;
constructor(private http: HttpClient, protected route: ActivatedRoute) {
 }
 getUsers(page?, itemsPerPage?): Observable<PaginatedResult<User[]>> {
   const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();
   let params = new HttpParams();
   if (page != null && itemsPerPage != null) {
      // itemsPerPage = 3;
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
   }
   return this.http.get<User[]>(this.baseUrl + 'users', {observe: 'response', params})
  .pipe(
    map(response => {
      paginatedResult.result = response.body;
      if (response.headers.get('Pagination') != null ) {
        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }
      return paginatedResult;
    })
  );
}
  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }
  // add service de lay danh sach order by id user ,,thay User[] thanh Order[] neu sau nay co bang order
  getListOrder(id): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'seelistorder/' + id);
  }
  getOneUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'getoneuserbyuserid/' + id);
  }
}
