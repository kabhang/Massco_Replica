import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-cutoff-dates',
  templateUrl: './cutoff-dates.component.html',
  styleUrls: ['./cutoff-dates.component.scss']
})
export class CutoffDatesComponent {

  constructor(public dialog: MatDialog) {}

  
  displayedColumns = ['title', 'value'];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(CuttOffDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'cutoff-edit',
  templateUrl: 'cutoff-edit.html',
})

export class CuttOffDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

export interface PeriodicElement {
  title: string;
  value: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: '', value: ''},
 
];