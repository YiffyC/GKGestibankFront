export class User
{

	id: number;
	username: string;
	address: string;
	email: string;

	constructor( id: number, username: string, address: string, email: string)
	{
		this.id = id;
		this.username = username;
		this.address = address;
		this.email = email;

	}

}
/*

import { Demande } from './demande'
import { Adresse } from './adresse'

export class User
{

	id: number;
	address: Adresse[];
	email: string;
	demandes: Demande[];
	users: User[];
	nom: string;
	prenom: string;
	mdp: string;
	username: string;
	numTel: string;
	sexe: string;





	constructor(id: number, address: Adresse[], email: string, demandes: Demande[], users: User[], nom: string, prenom: string, mdp: string, username: string, numTel: string, sexe: string)
	{
		this.id = id;
		this.username = username;
		this.address = address;
		this.email = email;
		this.demandes = demandes;
		this.users = users;
		this.mdp = mdp;
		this.numTel = numTel;
		this.sexe = sexe;
		this.nom = nom;
		this.prenom = prenom;
	}

}
*/