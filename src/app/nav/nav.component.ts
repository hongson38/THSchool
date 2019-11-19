import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(protected authService: AuthService, private alertify: AlertifyService, private router: Router) {
  }
  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('success');
    },
    error => {
      this.alertify.error(error);
      console.log(error);
    }, () => {
      this.router.navigate(['/members']);
    }
    );
  }

  loggeedIn() {
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authService.loggedIn();
  }
  UpdateInfor() {
    this.router.navigate(['/updateInfor']);
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    console.log('logout');
    this.router.navigate(['/home']);
  }


}
