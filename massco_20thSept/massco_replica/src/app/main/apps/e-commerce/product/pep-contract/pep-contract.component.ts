import { Component } from '@angular/core';

@Component({
  selector: 'pep-contract',
  templateUrl: './pep-contract.component.html',
  styleUrls: ['./pep-contract.component.scss']
})
export class PepContractComponent  {

  displayedColumns = [ 'contracts', 'purchaseOrder', 'botAward','signed','duration'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  contracts: string;    
  purchaseOrder: string;
  botAward: string;
  signed:string;
  duration:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { contracts: 'Project Criteria Consultant Selection', purchaseOrder:  '' , botAward:'',signed:'',duration:''},
  { contracts: 'Project Criteria Consultant Selection', purchaseOrder:  '' , botAward:'',signed:'',duration:''},
  { contracts: 'Project Criteria Consultant Selection', purchaseOrder:  '' , botAward:'',signed:'',duration:''},
  { contracts: 'Project Criteria Consultant Selection', purchaseOrder:  '' , botAward:'',signed:'',duration:''},
  { contracts: 'Project Criteria Consultant Selection', purchaseOrder:  '' , botAward:'',signed:'',duration:''},
  { contracts: 'Project Criteria Consultant Selection', purchaseOrder:  '' , botAward:'',signed:'',duration:''},

];