import {Component} from '@angular/core';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'currespondence',
  templateUrl: './currespondence.component.html',
  styleUrls: ['./currespondence.component.scss']
})
export class CurrespondenceComponent {
  displayedColumns = ['number', 'type', 'uploadedBy', 'description','fileName',]
  displayedColumnsTwo = ['contractID', 'bidPackNumber', 'description', 'contractor','contact','phoneNumber']
  dataSource = ELEMENT_DATA 
  dataSourceOne = ELEMENT_DATA_ONE 
}
  

export interface ProjectElement {
  number: string;
  type: string;
  uploadedBy: string;
  description: string;
  fileName:string;
}

const ELEMENT_DATA: ProjectElement[] = [
  {number: '', type: '', uploadedBy:'', description: '', fileName:''},  
  {number: '', type: '', uploadedBy:'', description: '', fileName:''},
];

export interface ContractElement {
  contractID: number;
  bidPackNumber: number; 
  description: string;
  contractor: string;
  contact:string;
  phoneNumber:string;
}

const ELEMENT_DATA_ONE: ContractElement[] = [
  {contractID: 2, bidPackNumber: 12, description:'', contractor: '', contact:'',phoneNumber:''},  
  {contractID: 4, bidPackNumber: 15, description:'', contractor: '', contact:'',phoneNumber:''},
  {contractID: 6, bidPackNumber: 17, description:'', contractor: '', contact:'',phoneNumber:''},  
  {contractID: 2, bidPackNumber: 12, description:'', contractor: '', contact:'',phoneNumber:''},    
  
];