
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../common.model';
import { CommonService } from '../common.service';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']  
})
export class ContactsComponent implements OnInit   {
  dataSource = new UserDataSource(this.commonService);
  displayedColumns = ['first', 'last', 'title', 'contactType', 'company', 'title', 'addressOne', 'contactType','phoneOne','ext','phoneTwo','cell','email','fax','comments'];
  constructor(private commonService: CommonService) { }
  
  ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private commonService: CommonService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.commonService.getUser();
  }
  disconnect() {}
}