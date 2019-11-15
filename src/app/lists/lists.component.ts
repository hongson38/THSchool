import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})

export class ListsComponent implements OnInit {
  constructor(public fb: FormBuilder, private userService: UserService, private route: ActivatedRoute) { }
  model: any = {};
  result: number;
  hideElement = true;
  provinceName: string;
  users: User[];
  listCity: any = ['Ha Noi', 'Sai Gon', 'Vinh', 'Da Nang'];
  listUser = this.fb.group({
    name: ['']
  });
  baseUrl = environment.apiUrl;
  selectedOption: string;
  onSubmit() {
    // alert(this.selectedOption);
    window.location.href = 'http://localhost:4200/members/' + this.selectedOption;
    // window.location.href = this.baseUrl + 'users/' + this.selectedOption;
  }


  ngOnInit() {
    this.loadUsers();
  }

  updateMesssages() {
    console.log(+this.model.a  + +this.model.b);
    this.result = +this.model.a  + +this.model.b;
    // tslint:disable-next-line: no-unused-expression
    this.hideElement = false;
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      console.log('bbbbbbbbb');
    }
    );
  }
}
