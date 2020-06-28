import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'noc',
  templateUrl: './noc.component.html',
  styleUrls: ['./noc.component.scss']
})
export class NOCComponent{



  displayedColumns = ['nocDetails', 'date', 'edit'];
  dataSource = ELEMENT_DATA
 constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogNocDialog, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
}
export interface PeriodicElement {
  nocDetails: string;
  date:string;
  edit:string;
  }

const ELEMENT_DATA: PeriodicElement[] = [
  {nocDetails:'NOC Date :',date:'	08/01/18 ',edit:'Edit'},
  {nocDetails:'Surety :',date:'**New**',edit:''},
  {nocDetails:'Board Approved :',date:'27th Oct,15',edit:''},
  {nocDetails:'Mailed NOC for Recording :',date:'10/27/15',edit:''},
  {nocDetails:'Date Recorded: :',date:'10/27/15',edit:''},
  {nocDetails:'Doc # :',date:'123456 ',edit:''},
  {nocDetails:'Release Date :',date:'08/06/18 ',edit:''},

];

@Component({
  selector: 'noc-dialog',
  templateUrl: 'noc-dialog.html',
})
export class DialogNocDialog {}