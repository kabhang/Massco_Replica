
import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from './contact';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']  
})
export class ContactsComponent implements OnInit   {
  dataSource = new UserDataSource(this.contactService);
  displayedColumns = ['first', 'last', 'title', 'contactType', 'company', 'title', 'addressOne', 'contactType','phoneOne','ext','phoneTwo','cell','email','fax','comments'];
  constructor(private contactService: ContactService) { }
  
  ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private contactService: ContactService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.contactService.getUser();
  }
  disconnect() {}
}