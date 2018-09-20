import { Component,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'contractor-type',
  templateUrl: './contractor-type.component.html',
  styleUrls: ['./contractor-type.component.scss']
})
export class ContractorTypeComponent {


  constructor(public dialog: MatDialog) {}

  
  displayedColumns = ['title', 'value'];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(ContractTypeDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'contractor-type-edit',
  templateUrl: 'contractor-type-edit.html',
})

export class ContractTypeDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

export interface PeriodicElement {
  title: string;
  value: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: '**New**', value: '**New**'},
  {title: 'Access Controls', value: 'Access Controls'},
  {title: 'Accordion Door Installer', value: 'Accordion Door Installer'},
  {title: 'Acoustical Ceilings', value: 'Acoustical Ceilings'},
  {title: 'Architect', value: 'Architect'},
  {title: 'Asphalt', value: 'Asphalt'},
  {title: 'Attorney At Law', value: 'Attorney At Law'},
  {title: 'Baler Repair', value: 'Baler Repair'},
  {title: 'Builders Hardware (doors/locks)', value: 'Builders Hardware (doors/locks)'},
  {title: 'Bus Charter', value: 'Bus Charter'},
  {title: 'Ceramic Tile', value: 'Ceramic Tile'},
  {title: 'Commissioning Services', value: 'Commissioning Services'},
  {title: 'Computer Equip/Software', value: 'Computer Equip/Software'},
  {title: 'Concrete Work', value: 'Concrete Work'},
  {title: 'Construction Materials', value: 'Construction Materials'},
  {title: 'Consultant', value: 'Consultant'},
  {title: 'Contractor', value: 'Contractor'},
  {title: 'Core Drilling', value: 'Core Drilling'},
  {title: 'Demolition', value: 'Demolition'},
  {title: 'Design-Build Consultant', value: 'Design-Build Consultant'},
  {title: 'Document Management', value: 'Document Management'},
  {title: 'Electrical', value: 'Electrical'},
  {title: 'Elevators', value: 'Elevators'},
  {title: 'Engineering', value: 'Engineering'},
  {title: 'Fencing', value: 'Fencing'}
 
];
