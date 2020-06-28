import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-maintain-client',
  templateUrl: './maintain-client.component.html',
  styleUrls: ['./maintain-client.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MaintainClientComponent {
 
  dataSource = ELEMENT_DATA;
  columnsToDisplay = [ 'Description', 'Order', 'Setting'];
  expandedElement: PeriodicElement;

  displayedColumns = ['desc', 'orde', 'sett'];
  dataSourceOne = ELEMENT_DATA_ONE;

}

export interface PeriodicElement {
  Description: string;
  Order: string;
  Setting: string;
}

export interface subData {
  desc: string;
  orde: string;
  sett: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Description: 'CollegeWidget', Order: '', Setting: ''  }, 
  {Description: 'CollegeWidget', Order: '', Setting: '' },
  {Description: 'Dashboard', Order: '',Setting: ''},
  {Description: 'ProjectWidget', Order: '', Setting: ''}
];


const ELEMENT_DATA_ONE: subData[] = [
  { desc: 'College Notes on Overview Tab', orde: '', sett: ''},
  { desc: 'College Notes on Overview Tab', orde: '', sett: ''},
  { desc: 'Dashboard PM Overview', orde: '', sett: ''},
  { desc: 'DashboardAlerts', orde: '', sett: ''},
  { desc: 'Dashboard Inbox', orde: '', sett: ''},
  { desc: 'Projects Notes on Overview Tab', orde: '', sett: ''},
  { desc: 'Projects Team Members on Overview Tab', orde: '', sett: ''},
 
 
];