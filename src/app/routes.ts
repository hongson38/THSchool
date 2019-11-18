import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MessagesComponent } from './messages/messages.component';
import { UpdateInforComponent } from './updateInfor/updateInfor.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { DeletelistuserComponent } from './deletelistuser/deletelistuser.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {
     path: '',
     runGuardsAndResolvers: 'always',
     canActivate: [AuthGuard],
     children: [
        {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
        {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
        {path: 'messages', component: MessagesComponent},
        {path: 'lists', component: ListsComponent},
        {path: 'deletelistuser', component: DeletelistuserComponent, resolve: {users: MemberListResolver} },
        {path: 'updateInfor', component: UpdateInforComponent, resolve: {user: MemberEditResolver}},
                ]
    },
    // {
    //     path: '',
    //     canDeactivate: [AuthGuard],
    //     children: [
    //         {   path: 'listssvTest', component: ListsComponent, data : {role: 'admin'}}
    //               ]
    // },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

