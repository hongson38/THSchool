import { Component, OnInit } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  registerMode = false;
 // values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  //  this.getValues();
  }
  // getValues() {
  //   this.http.get('https://localhost:5001/api/values').subscribe(response => {
  //     this.values = response;
  //   }, error => {
  //     console.log( Error);
  //   });
  // }

  registerToggle() {
    this.registerMode = true;

    // this.registerMode = !this.registerMode;
  }
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
