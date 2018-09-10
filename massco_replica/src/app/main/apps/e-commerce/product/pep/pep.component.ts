import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'pep',
  templateUrl: './pep.component.html',
  styleUrls: ['./pep.component.scss'],

})
export class PepComponent  {
  displayedColumns = [ 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
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