import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../_models/photo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm, FormArray, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-deletelistuser',
  templateUrl: './deletelistuser.component.html',
  styleUrls: ['./deletelistuser.component.css']
})
export class DeletelistuserComponent implements OnInit {


  constructor( private router: ActivatedRoute, private fb: FormBuilder, private http: HttpClient) { }
  users: User[];
  arr: any = {};
  listIdUser = [];
  myForm: FormGroup;
  baseUrl = environment.apiUrl;
  ngOnInit() {
    this.router.data.subscribe(data => {
      this.users = data.users;
    });
    this.myForm = this.fb.group({
      userItem: this.fb.array([])
    });
  }
  submitDelete() {
    console.log(this.listIdUser);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'aaa': JSON.stringify(this.listIdUser)
      })
    };
    return this.http.delete(this.baseUrl + 'users/', options ).subscribe();
  }
  onChange(userId: string, isChecked: boolean) {
    const idFormArray = this.myForm.controls.userItem as FormArray;
    if (isChecked) {
      idFormArray.push(new FormControl(userId));
      this.listIdUser.push(userId);
    } else {
      const index = idFormArray.controls.findIndex(x => x.value === userId);
      idFormArray.removeAt(index);
      this.listIdUser.splice(index, 1);
     // this.listIdUser.pop()
    }
  }
  }

