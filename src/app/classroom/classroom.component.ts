import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  classrooms: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getClassRoom();
  }
 getClassRoom() {
    this.http.get('https://localhost:5001/api/values').subscribe(response => {
      this.classrooms = response;
    }, error => {
      console.log( Error);
    });
  }

}
