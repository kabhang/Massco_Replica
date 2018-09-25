import { Component } from '@angular/core';


export interface PeriodicElement {
  description: string;
  role: string;
  user: string;
  routingType: string;
  limit:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {role: 'DDFP&C', description: '', user: 'Rick Williams NOCCCD', routingType: 'District AP',limit:50000000},
  {role: 'District AP', description: '', user: 'Merina Nunez NOCCCD', routingType: 'FDO Accountant',limit:50000000},
  {role: 'Finance Manager', description: '', user: 'Raphael Villegas', routingType: 'FDO Accountant',limit:50000000},
  {role: 'Program Manager', description: '', user: 'Eduardo Escobedo MAAS', routingType: 'FDO Accountant',limit:50000000}, 
  {role: 'Program Manager', description: '', user: 'Susan Rittel NOCCCD', routingType: 'FDO Accountant',limit:50000000}, 
  {role: 'Test', description: '', user: 'nimda', routingType: 'Signator',limit:100000}, 
  {role: 'Test 2', description: '', user: 'jeremy Chapman', routingType: 'Signator',limit:100000}

];

@Component({
  selector: 'maintain-workflow',
  templateUrl: './maintain-workflow.component.html',
  styleUrls: ['./maintain-workflow.component.scss']
})

export class MaintainWorkflowComponent{
  displayedColumns: string[] = ['role', 'description', 'user', 'routingType','limit'];
  dataSource = ELEMENT_DATA;

}
