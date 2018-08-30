import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrls: ['./project-budget.component.scss']
})
export class ProjectBudgetComponent  {

  displayedColumns = ['position', 'name', 'totalCost', 'stateFunded', 'bondFunded','local','rda','schMaint','measureX'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  position:number;
  alphaBet:string;
  name: string;
  totalCost: number;
  stateFunded: number;
  bondFunded: number;
  local: number;
  rda:number;
  schMaint:number;
  measureX:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {alphaBet:'',position: 1, name: 'Site Aquisition', totalCost: 0, stateFunded: 0,bondFunded: 0	,local:0,rda: 0,schMaint:0,measureX: 0},
  {alphaBet:'A',position: 2, name: 'Plans', totalCost: 113977.00, stateFunded: 0,bondFunded: 113977.00,local:0,rda: 0,schMaint:0,measureX: 0},
  {alphaBet:'B',position: 3, name: 'Architectual Fees', totalCost: 0, stateFunded: 0,bondFunded: 0	,local:0,rda: 0,schMaint:0,measureX: 0},
  {alphaBet:'C',position: 4, name: 'Project Management', totalCost: 0, stateFunded: 0,bondFunded: 0	,local:0,rda: 0,schMaint:0,measureX: 0},
  {alphaBet:'D',position: 5, name: 'Preliminary Tests',  totalCost: 113977.00, stateFunded: 0,bondFunded: 113977.00,local:0,rda: 0,schMaint:0,measureX: 0},
  {alphaBet:'E',position: 6, name: 'Working Drawings', totalCost: 0, stateFunded: 0,bondFunded: 0	,local:0,rda: 0,schMaint:0,measureX: 0},
  {alphaBet:'A',position: 7, name: 'Architectural Fees', totalCost: 0, stateFunded: 0,bondFunded: 0	,local:0,rda: 0,schMaint:0,measureX: 0},
  {alphaBet:'B',position: 8, name: 'Office of SA, Plan Check Fee', totalCost: 0, stateFunded: 0,bondFunded: 0	,local:0,rda: 0,schMaint:0,measureX: 0},
  {alphaBet:'C',position: 9, name: 'CC Plan Check Fee', totalCost: 0, stateFunded: 0,bondFunded: 0	,local:0,rda: 0,schMaint:0,measureX: 0},
  {alphaBet:'D', position: 10,name: 'Other Costs', totalCost: 0, stateFunded: 0,bondFunded: 0	,local:0,rda: 0,schMaint:0,measureX: 0}
];

