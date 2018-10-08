import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { CommonService } from '../common.service';
import { DataSource } from '@angular/cdk/table';
import { objectCode } from '../common.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'object-code',
  templateUrl: './object-code.component.html',
  styleUrls: ['./object-code.component.scss']
})
export class ObjectCodeComponent  {
  dataSource = new UserDataSource(this.commonService);
  constructor(public dialog: MatDialog, private commonService:CommonService) {}

  displayedColumns = ['objectCode', 'description', 'budgetGroup', 'ObjectCodeGroup', 'action'];
  

  openDialog() {
    this.dialog.open(ObjectCodeDialog, {
     
    });
  }
 

}


@Component({
  selector: 'object-code-edit',
  templateUrl: 'object-code-edit.html',
})

export class ObjectCodeDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}



export class UserDataSource extends DataSource<any> {
  constructor(private commonService: CommonService) {
    super();
  }
  connect(): Observable<objectCode[]> {
    return this.commonService.getObjectcode();
  }

  disconnect() {}


}
