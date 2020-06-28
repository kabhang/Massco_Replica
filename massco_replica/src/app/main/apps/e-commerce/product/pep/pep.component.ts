import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'pep',
  templateUrl: './pep.component.html',
  styleUrls: ['./pep.component.scss'],

})
export class PepComponent  {
  displayedColumns = [ 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PepSavechanges, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  openDialogOne(): void {
    const dialogRef = this.dialog.open(PepRecordItration, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }





  }

  @Component({
    selector: 'PepSavechanges',
    templateUrl: 'pep.saveChange.html',
  })
  export class PepSavechanges {
  
    constructor(
      public dialogRef: MatDialogRef<PepSavechanges>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }


  @Component({
    selector: 'PepRecordItration',
    templateUrl: 'pep.recordIteration.html',
  })
  export class PepRecordItration {
  
    constructor(
      public dialogRef: MatDialogRef<PepRecordItration>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }


  export interface PeriodicElement {
    name: string;    
    weight: string;
    symbol: string;
  }

  const ELEMENT_DATA: PeriodicElement[] = [
    { name: 'Project Criteria Consultant Selection', weight: '', symbol: ''},
    { name: 'Project Criteria Development', weight: '', symbol: ''},
    { name: 'RFQ/RFP for DBE', weight: '', symbol: ''},
    { name: 'Program Validation', weight: '', symbol: ''},
    { name: 'Schematic Design', weight: '', symbol: ''},
    { name: 'Design Development', weight: '', symbol: ''},
    { name: 'Construction Documents', weight: '', symbol: ''},
    { name: 'Agency Processing (DSA)', weight: '', symbol: ''},
    { name: 'Bidding Process1', weight: '', symbol: ''},
    { name: 'GMP Agreement', weight: '', symbol: ''},
    { name: 'Construction', weight: '', symbol: ''},
    { name: 'FF&E (Installation)', weight: '', symbol: ''},
    { name: 'Occupancy', weight: '', symbol: ''},
    { name: 'Close-Out2', weight: '', symbol: ''},

  ];