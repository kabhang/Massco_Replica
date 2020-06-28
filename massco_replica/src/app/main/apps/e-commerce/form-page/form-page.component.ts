import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FormPageComponent  {

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
  {Description: 'College Tabs', Order: '', Setting: ''  }, 
  {Description: 'Contact List', Order: '', Setting: '' },
  {Description: 'Contract Tabs', Order: '',Setting: ''},
  {Description: 'Ledger Tabs', Order: '', Setting: ''},
  {Description: 'Project Group Tabs',    Order: '',Setting: ''  },
  {Description: 'Project Tabs',Order: '',Setting: '' }
];


const ELEMENT_DATA_ONE: subData[] = [
  { desc: 'College Overview  (*** Required to show College in Nav! ***)', orde: '', sett: ''},
  { desc: 'College Notes', orde: '', sett: ''},
  { desc: 'College Attachments', orde: '', sett: ''},
  { desc: 'District Schedules', orde: '', sett: ''},
  { desc: 'Meeting Minutes', orde: '', sett: ''},
  { desc: 'College Calendar Tab', orde: '', sett: ''},
 
 
];
