import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'acivity-mode',
  templateUrl: './acivity-mode.component.html',
  styleUrls: ['./acivity-mode.component.scss']
})
export class AcivityModeComponent  {
  constructor(public dialog: MatDialog) {}

  displayedColumns = ['title', 'value'];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(ActivityEditDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

}


@Component({
  selector: 'activity-edit',
  templateUrl: 'activity-edit.html',
})

export class ActivityEditDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}



export interface PeriodicElement {
  title: number;
  value: number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 71000, value: 71000}

];