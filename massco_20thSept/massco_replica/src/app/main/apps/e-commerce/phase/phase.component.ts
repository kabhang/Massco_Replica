import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent  {

  constructor(public dialog: MatDialog) {}

  
  displayedColumns = ['title', 'value'];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(PhaseDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}
@Component({
  selector: 'phase-edit',
  templateUrl: 'phase-edit.html',
})

export class PhaseDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

export interface PeriodicElement {
  title: string;
  value: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: '', value: ''},
 
];
