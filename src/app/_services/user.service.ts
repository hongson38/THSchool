import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';



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
constructor(private http: HttpClient) {
 }
 getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'users');
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
