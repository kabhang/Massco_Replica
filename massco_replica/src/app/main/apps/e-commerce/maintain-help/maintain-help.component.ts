import { Component, Inject,OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { maintainhelp } from '../common.model';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-maintain-help',
  templateUrl: './maintain-help.component.html',
  styleUrls: ['./maintain-help.component.scss']
})
export class MaintainHelpComponent  {
  dataSource = new UserDataSource(this.commonService);
  constructor(
    public dialog: MatDialog, 
    private commonService: CommonService) {}

  
  displayedColumns = ['titleOne', 'value'];
  

  openDialog() {
    this.dialog.open(maintainHelpDialog , {
      data: {
        animal: 'panda'
      }
    });
  }
}



@Component({
  selector: 'maintain-help-edit',
  templateUrl: 'maintain-help-edit.html',
})

export class maintainHelpDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}


export class UserDataSource extends DataSource<any> {
  constructor(private commonService: CommonService) {
    super();
  }
  connect(): Observable<maintainhelp[]> {
    return this.commonService.getMainatinHelp();
  }
  disconnect() {}
}