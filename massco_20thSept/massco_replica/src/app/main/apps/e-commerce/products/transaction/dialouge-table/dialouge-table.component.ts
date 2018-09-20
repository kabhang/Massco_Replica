import {Component} from '@angular/core';

export interface histData {
  lastAction: string;
  on: string;
  notes: string;
  user: string;
}

const ELEMENT_DATA: histData[] = [
  {lastAction: 'Approved by Program Manager', on: '6th Jan 2018', notes: '', user: 'Eduardo Escobedo MAAS'},
  {lastAction: 'Approved by Finance Manager', on: '6th Jan 2018', notes: '', user: 'Raphael Villegas'},

  
];

@Component({
  selector: 'dialouge-table',
  templateUrl: './dialouge-table.component.html',
  styleUrls: ['./dialouge-table.component.scss']
})
export class DialougeTableComponent  {

  displayedColumns: string[] = ['lastAction', 'on', 'notes', 'user'];
  dataSource = ELEMENT_DATA;

}
