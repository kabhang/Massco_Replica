
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../common.model';
import { CommonService } from '../common.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { ContactService } from './contact.service';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']  
})
export class ContactsComponent implements OnInit   {
  
  dataSource = new UserDataSource(this.contactService);
  displayedColumns = ['first', 'last', 'title', 'contactType', 'company', 'city','title', 'addressOne', 'phoneOne','ext','phoneTwo','cell','email','fax','comments'];
  constructor(private contactService: ContactService, public dialog: MatDialog) { }
  
  ngOnInit() {
  }


  

  
  openDialog() {
    this.dialog.open(ContactsCodeDialog, {
      data: {
        animal: 'panda'
      }
    });
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


@Component({
  selector: 'contacts-edit',
  templateUrl: 'contacts-edit.html',
})

export class ContactsCodeDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
