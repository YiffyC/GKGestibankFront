import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { agentService  } from '../../service/agent.service'
import { User } from '../../modele/user';
import { Agent } from '../../modele/agent';
import { Router } from '@angular/router';

/* useless for now
 * import { agentService } from '../../service/agent.service';
*/ 

@Component({
  selector: 'app-user-accounts-list',
  templateUrl: './user-accounts-list.component.html',
  styleUrls: ['./user-accounts-list.component.css'],
  providers: [agentService]
})
export class UserAccountsListComponent implements OnInit
{

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

}
