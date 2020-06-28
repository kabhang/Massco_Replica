import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-bound-series',
  templateUrl: './bound-series.component.html',
  styleUrls: ['./bound-series.component.scss']
})
export class BoundSeriesComponent {

  constructor(public dialog: MatDialog) {}

  
  displayedColumns = ['title', 'value'];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(BoundSeriesDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'bound-series-edit',
  templateUrl: 'bound-series-edit.html',
})

export class BoundSeriesDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

export interface PeriodicElement {
  title: string;
  value: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'A', value: 'A'},
  {title: 'B', value: 'B'},
  {title: 'C', value: 'C'},
  {title: 'D', value: 'D'},
  {title: 'E', value: 'E'}
  
 
];