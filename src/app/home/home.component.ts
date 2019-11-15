import { Component, OnInit } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  registerMode = false;
 // values: any;
  model: any = {};
  son1: number;
  son2: number;
  result: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  updateMesssages() {
    console.log(this.model.a + ' ' + this.model.b);
   // this.result = +this.son2 + +this.son1;
  }
  addNumber() {
    alert(this.son1 + ' ' + this.son2);
    this.alertify.success(' ok');
  }




  registerToggle() {
    this.registerMode = true;
    // this.registerMode = !this.registerMode;
  }
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
