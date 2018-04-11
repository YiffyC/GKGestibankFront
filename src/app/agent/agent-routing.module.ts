import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttachedClientsComponent} from '../agent/attached-clients/attached-clients.component'
//import { UserListComponent } from '../user/user-list/user-list.component';

const routes: Routes = 
[
	//ne pas confondre ce lien et celui dans le ws ;)
	{path: 'agent/clients', component: AttachedClientsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
