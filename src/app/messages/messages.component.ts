import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  selectedOption: string;
  selectedOption2: string;
  users: User[];
  oneUserResponse: User;
  listOrderByUser01: User[];
  idUser: number;
  constructor(public fb: FormBuilder, private userService: UserService) {}

  name123 = this.fb.group({
    name: ['']
  });

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUsers().subscribe((users123: User[]) => {
      this.users = users123;
    }, error => {});
  }
  onChange(deviceValue) {
    console.log(deviceValue);
    this.getListUserByIdUser(deviceValue);
}
  onChange1(deviceValue) {
    console.log(deviceValue);
    this.getoneUserByIdUser(deviceValue);
  }

  getListUserByIdUser(idUser) { // get list order detail by id user
    this.userService.getListOrder(idUser).subscribe((listOrderByUser113: User[]) => {
      this.listOrderByUser01 = listOrderByUser113;
    }, error => {});
  }
  getoneUserByIdUser(idUser) {
    this.userService.getOneUser(idUser).subscribe((oneU: User) => {
      this.oneUserResponse = oneU;
    }, error => {});
  }

}
