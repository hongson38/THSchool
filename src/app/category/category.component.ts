import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { ClassRoom } from '../_models/classroom';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
   styleUrls: ['./category.component.css']
})
// tslint:disable-next-line: no-unused-expression
export class CategoryComponent implements OnInit {
  oneCategory: any = {};
  listClassRoom: ClassRoom[];
  constructor(private http: HttpClient) { }
  defaultValueClassRoom: any;
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  ngOnInit() {
    this.getClassRoom();
  }
  CreateCate() {

    const token = localStorage.getItem('token');
    const abc = this.jwtHelper.decodeToken(token);
    this.oneCategory.personCreatedUserId = abc.nameid;

    alert('' + this.oneCategory.classRoomID + '' + this.oneCategory.categoryName +
    this.oneCategory.personCreatedUserId + this.oneCategory.isActive);
    // return this.http.put(this.baseUrl + 'users/',  this.user).subscribe();
    return this.http.post(this.baseUrl + 'category/', this.oneCategory).subscribe();
  }
  getClassRoom() {
    this.http.get(this.baseUrl + 'classroom/').subscribe((response: ClassRoom[] ) => {
     this.listClassRoom = response;
    }, error => {
      console.log( Error);
      alert('API Not working');
    });
  }
}
