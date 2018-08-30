import {Component} from '@angular/core';

export interface attachGrid {
  lastAction: string;
  on: string;
  notes: string;
  user: string;
}

const ELEMENT_DATA: attachGrid[] = [
  {lastAction: 'Approved by Program Manager', on: '6th Jan 2018', notes: '', user: 'Eduardo Escobedo MAAS'},
  {lastAction: 'Approved by Finance Manager', on: '6th Jan 2018', notes: '', user: 'Raphael Villegas'},

  
];
@Component({
  selector: 'attach-table',
  templateUrl: './attach-table.component.html',
  styleUrls: ['./attach-table.component.scss']
})
export class AttachTableComponent {

  displayedColumns: string[] = ['lastAction', 'on', 'notes', 'user'];
  dataSource = ELEMENT_DATA;
}
