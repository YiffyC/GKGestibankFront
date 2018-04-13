import { Component, OnInit } from '@angular/core';
import { User } from '../../modele/user';
import { agentService } from '../../service/agent.service';
import { Agent } from '../../modele/agent';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-attached-clients',
  templateUrl: './attached-clients.component.html',
  styleUrls: ['./attached-clients.component.css'],
  providers: [agentService]
})
export class AttachedClientsComponent implements OnInit
{
	//private router: Router, agentService:agentService

	private users:User[];
	private agent: Agent;

	constructor(private router: Router, private agentService:agentService) { }

	ngOnInit()
	{
		this.agentService.searchClient().subscribe(users => 
															{
																this.users = users;
															},

													err => 
															{
																console.log(err);
															});

	}

	redirectNewUserPage()
	{
		this.router.navigate(['/user/create']);
	}

	editUserPage(user:User)
	{
		if(user)
		{
			this.router.navigate(['/user/edit', user.id]);
		}
	}

	comptesUserPage(user:User)
	{
		if(user)
		{
			this.router.navigate(['/user/accounts/', user.id]);
		}
	}




}
