import { Component, OnInit } from '@angular/core';
import { User } from '../../modele/user';
import { agentService } from '../../service/agent.service';
import { Router } from '@angular/router';

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

	constructor(private agentService:agentService) { }

	ngOnInit()
	{
		this.agentService.searchClient().subscribe(users => 
															{
																this.users = users;
															},

													err => 
															{
																console.log(err);
															})
	}



}
