import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { decode } from 'punycode';
import { AuthService } from '../_services/auth.service';
import { JwtHelperService} from '@auth0/angular-jwt';
import { FormGroup, FormBuilder } from '@angular/forms';
import { updateLocale } from 'ngx-bootstrap';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-updateInfor',
  templateUrl: './updateInfor.component.html',
  styleUrls: ['./updateInfor.component.css']
})
export class UpdateInforComponent implements OnInit {
  user: User;
  jwtHelper = new JwtHelperService();
  decodeToken: any;
  model: any;
  viewModel: any = {};

  // editForm: FormGroup;
  baseUrl = environment.apiUrl;
  constructor(private userService: UserService, private http: HttpClient,
              private authsv: AuthService, private formBuilder: FormBuilder, private route: ActivatedRoute ) { }
  ngOnInit() {
    // this.loadDataUser();
     this.route.data.subscribe(data => {
      this.user = data.user;
   });
  }
  loadDataUser() {
    const token = localStorage.getItem('token');
    const abc = this.jwtHelper.decodeToken(token);
    console.log(abc.nameid);
    // this.userService.getUser(abc.nameid);
    this.userService.getUser(abc.nameid).subscribe((userresponse: User) => {
      this.user = userresponse;
    }, error => {
      console.log('error');
    });
  }
  onSubmitUpdate() {
    // const token = localStorage.getItem('token');
    // const abc = this.jwtHelper.decodeToken(token);
    // this.user.userId = abc.nameid;
    // this.viewModel.username = abc.unique_name;
    // this.viewModel.userId = abc.nameid;


    // this.user.username = this.viewModel.username;
    // this.user.city = this.viewModel.city;
    // this.user.gender = this.viewModel.gender;
    // this.user.introduction = this.viewModel.introduction;
    return this.http.put(this.baseUrl + 'users/',  this.user).subscribe();
   // return this.http.post(this.baseUrl + 'register', model);
  }
  // register(model: any) {
  //   return this.http.post(this.baseUrl + 'register', model);
  // }
}
