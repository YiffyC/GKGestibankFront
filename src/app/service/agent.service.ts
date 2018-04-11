import  { Injectable } from '@angular/core' ;
import { User } from '../modele/user';
import { Agent } from '../modele/agent'
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class agentService 
{
	//adresse du webservice
	// Attention idAgent en DUR pour le moment
	private apiUrl = 'http://localhost:8080/SpringAngularStartProject/agent/10/clients'
	
	constructor(private http:Http) {}

	searchClient():Observable<User[]>
	{
		return this.http.get(this.apiUrl).map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}