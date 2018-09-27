import { Component } from '@angular/core';


export interface PeriodicElement {
  first: string;
  last: string;
  company:string;
  title: string;
  addressOne:string;
  contactType: string;
  phoneOne:number;
  ext:number;
  phoneTwo:number;
  cell:number;
  email:string;
  fax:number;
  comments:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {first: 'Miranda', last: 'Albert', company: 'Cypress College', title:'Director' ,addressOne:'9200 Valley View Street',contactType:'District',phoneOne:714-808-4773,ext:0,phoneTwo:1000014651,cell:97-985-465,email:'tom@adfiresprinklers.com',fax:123-465-858,comments:'Director Physical Plant & Facilities, Cypress'},
  {first: 'Miranda', last: 'Albert', company: 'Cypress College', title:'Director' ,addressOne:'9200 Valley View Street',contactType:'District',phoneOne:714-808-4773,ext:0,phoneTwo:1000014651,cell:97-985-465,email:'tom@adfiresprinklers.com',fax:123-465-858,comments:'Director Physical Plant & Facilities, Cypress'},
  {first: 'Miranda', last: 'Albert', company: 'Cypress College', title:'Director' ,addressOne:'9200 Valley View Street',contactType:'District',phoneOne:714-808-4773,ext:0,phoneTwo:1000014651,cell:97-985-465,email:'tom@adfiresprinklers.com',fax:123-465-858,comments:'Director Physical Plant & Facilities, Cypress'},
  {first: 'Miranda', last: 'Albert', company: 'Cypress College', title:'Director' ,addressOne:'9200 Valley View Street',contactType:'District',phoneOne:714-808-4773,ext:0,phoneTwo:1000014651,cell:97-985-465,email:'tom@adfiresprinklers.com',fax:123-465-858,comments:'Director Physical Plant & Facilities, Cypress'},
  {first: 'Miranda', last: 'Albert', company: 'Cypress College', title:'Director' ,addressOne:'9200 Valley View Street',contactType:'District',phoneOne:714-808-4773,ext:0,phoneTwo:1000014651,cell:97-985-465,email:'tom@adfiresprinklers.com',fax:123-465-858,comments:'Director Physical Plant & Facilities, Cypress'},
  {first: 'Miranda', last: 'Albert', company: 'Cypress College', title:'Director' ,addressOne:'9200 Valley View Street',contactType:'District',phoneOne:714-808-4773,ext:0,phoneTwo:1000014651,cell:97-985-465,email:'tom@adfiresprinklers.com',fax:123-465-858,comments:'Director Physical Plant & Facilities, Cypress'}
  

];
@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']  
})
export class ContactsComponent   {
  displayedColumns: string[] = ['first', 'last', 'title', 'contactType', 'company', 'title', 'addressOne', 'contactType','phoneOne','ext','phoneTwo','cell','email','fax','comments'];
  dataSource = ELEMENT_DATA;

}
