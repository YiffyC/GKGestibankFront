import { User } from './user';

export class Agent extends User
{
	matricule: string;


	constructor(id: number, username: string, address: string, email: string, matricule: string) 
	{
		super(id, username, address, email);
		this.matricule = matricule;
	}

	
}