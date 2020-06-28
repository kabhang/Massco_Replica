import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface notesData {
  on : string;
  description: string;
  by:string;
  
}

const ELEMENT_DATA: notesData[] = [
  {on: '20th Aug,18', description: 'Lorem Impsum', by: 'jeremy Chapman'},
  {on: '20th Aug,18', description: 'Lorem Impsum ', by: 'jeremy Chapman'}

];

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
  
})
export class NotesComponent  {

  displayedColumns = ['on', 'description', 'by'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentNotes, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


@Component({
  selector: 'dialog-notes',
  templateUrl: 'dialog-notes.html',
})
export class DialogContentNotes {}