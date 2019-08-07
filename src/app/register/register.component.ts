import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Manager{ full_name:string, email:string, password:string }
export interface Company { name: string, logo: string, branches: AngularFirestoreCollection }
export interface Branch { name:string, manager:Manager }



@Component({
	selector: 'app-register',
  	templateUrl: './register.component.html',
  	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	private companies: Observable<Company[]>
	private companiesColl: AngularFirestoreCollection<Company>

	private company: Observable<Company>;
	private companyDoc: AngularFirestoreDocument<Company>

	private branches: AngularFirestoreCollection<Branch>
	  
  	constructor(private afs: AngularFirestore) {
		this.companiesColl = afs.collection<Company>('bus_companies');
		this.companyDoc = afs.doc('bus_companies/BB-CO-001');
		this.company = this.companyDoc.valueChanges();
  	}


  	ngOnInit() {
		 
	}
	  
	registerCompany(){

	}

}
