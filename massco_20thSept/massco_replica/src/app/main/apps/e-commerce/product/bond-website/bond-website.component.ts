import { Component} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'bond-website',
  templateUrl: './bond-website.component.html',
  styleUrls: ['./bond-website.component.scss']
})
export class BondWebsiteComponent {

 

  displayedColumns = ['bondcDetails', 'details'];
  dataSource = ELEMENT_DATA
 constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogBondDialog, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
}
export interface bondData {
  bondcDetails: string;
  details:string;

  }

const ELEMENT_DATA: bondData[] = [
  {bondcDetails:'Publish To Web :',details:'yes'},
  {bondcDetails:'Scope :',details:''},
  {bondcDetails:'Status :',details:''},
  {bondcDetails:'Campus PM :',details:''},
  {bondcDetails:'Project Estimate :',details:''},
 

];

@Component({
  selector: 'bond-dialog',
  templateUrl: 'bond-dialog.html',
})
export class DialogBondDialog {}