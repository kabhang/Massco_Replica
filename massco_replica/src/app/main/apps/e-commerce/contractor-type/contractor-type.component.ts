import { Component,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'contractor-type',
  templateUrl: './contractor-type.component.html',
  styleUrls: ['./contractor-type.component.scss']
})
export class ContractorTypeComponent {


  constructor(public dialog: MatDialog) {}

  
  displayedColumns = ['title', 'value'];


  openDialog() {
    this.dialog.open(ContractTypeDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'contractor-type-edit',
  templateUrl: 'contractor-type-edit.html',
})

export class ContractTypeDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

export interface PeriodicElement {
  titleTwo: string;
  valueTwo: string;
 
}

