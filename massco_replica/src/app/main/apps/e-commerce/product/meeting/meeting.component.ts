import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface notesData {
  date : string;
  meetingID: number;
  organizer:string;
  phase:string;
  subPhase:string;
  description:string;
  minutes:string;

  
}

const ELEMENT_DATA: notesData[] = [
  {date: '20th Aug,18', meetingID: 2, organizer: 'jeremy Chapman',phase:'',subPhase:'',description:'',minutes:''},
  {date: '20th Aug,18', meetingID: 4, organizer: 'jeremy Chapman',phase:'',subPhase:'',description:'',minutes:''},
  {date: '20th Aug,18', meetingID: 5, organizer: 'jeremy Chapman',phase:'',subPhase:'',description:'',minutes:''},
  {date: '20th Aug,18', meetingID: 7, organizer: 'jeremy Chapman',phase:'',subPhase:'',description:'',minutes:''},
  

];

@Component({
  selector: 'meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent{

  displayedColumns = ['date', 'meetingID', 'organizer','phase','subPhase','description','minutes'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentMeeting, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


@Component({
  selector: 'dialog-meeting',
  templateUrl: 'dialog-meeting.html',
})
export class DialogContentMeeting {}