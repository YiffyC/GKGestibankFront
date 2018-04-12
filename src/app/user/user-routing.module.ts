import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent} from './user-list/user-list.component' ;
import { UserDetailComponent} from './user-detail/user-detail.component' ;
import { UserAccountsListComponent } from './user-accounts-list/user-accounts-list.component'

const routes: Routes = 
[
	{path: 'user',component: UserListComponent},
	{path: 'user/create', component: UserDetailComponent},
	{path: 'user/edit/:id', component: UserDetailComponent},
	{path: 'user/accounts/', component: UserAccountsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
