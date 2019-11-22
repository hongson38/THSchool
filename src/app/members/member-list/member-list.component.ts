import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];
  pagination: Pagination;
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.data.subscribe(data => {
      this.users = data.users.result;
     //this.users = data['users'].result;
      this.pagination = data.users.pagination;
       this.loadUsers();
   });
  }
   // tslint:disable-next-line: deprecation
   pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }
  // pageChanged(event: any): void {
  //   console.log(this.pagination.currentPage);
  //   console.log(this.pagination.itemsPerPage);
  //   this.pagination.currentPage = event.page;
  //   this.loadUsers();
  // }
  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage)
    .subscribe((resu: PaginatedResult<User[]>) => {
      this.users = resu.result;
      this.pagination = resu.pagination;
     // alert(this.pagination.currentPage + 'itemPerPage: ' + this.pagination.itemsPerPage);
    }, error => {
      this.alertify.error(error);
      console.log('Error when get list user- memberlist');
    }
    );
  }
  // loadUsers() {
  //   this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
  //                   .subscribe((res: PaginatedResult<User[]>) => {
  //     this.users = res.result;
  //     this.pagination = res.pagination;
  //   }, error => {
  //     this.aletify.error(error);
  //   });
  // }

}
