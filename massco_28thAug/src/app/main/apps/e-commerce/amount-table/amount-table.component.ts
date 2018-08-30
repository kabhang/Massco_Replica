import {Component} from '@angular/core';

export interface Transaction {
  item: string;
  tname:string;
  no:number;  
  source:string;
  objectCode:number;
  rmb:string;
  amount:number;
  cost: number;
  
}


@Component({
  selector: 'amount-table',
  templateUrl: './amount-table.component.html',
  styleUrls: ['./amount-table.component.scss']
})
export class AmountTableComponent{
  displayedColumns: string[] = ['item', 'tname', 'no', 'source','objectCode','rmb','amount','cost'];
  transactions: Transaction[] = [
    {item: 'Contract - 3. Working Draw...',tname: 'CL',no: 1, source:'other',objectCode:62303,rmb:'',amount:0,cost: 920}
   
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
