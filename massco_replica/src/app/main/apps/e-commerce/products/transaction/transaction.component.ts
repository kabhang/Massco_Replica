import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
    animal: 'panda' | 'unicorn' | 'lion';
  }


@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  
})
export class TransactionComponent  {
    displayedColumns = ['invoiceDate', 'hist', 'type', 'status','invoice',"description",'reimb','att','route','totalAmount','rententionAmount','payableAmount'];
    dataSource = ELEMENT_DATA;

    constructor(public dialog: MatDialog) {}

    openDialog() {
      this.dialog.open(DialogContactExampleDialog, {       
      });
    }

       openDialogAttachments() {
        this.dialog.open(DialogAttachmentDialog, {         
        });
      }

      getTotalCost() {
        return this.dataSource.map(t => t.totalAmount).reduce((acc, value) => acc + value, 0);
      }
      getTotalCostrent() {
        return this.dataSource.map(t => t.rententionAmount).reduce((acc, value) => acc + value, 0);
      }
      getTotalCostpay() {
        return this.dataSource.map(t => t.payableAmount).reduce((acc, value) => acc + value, 0);
      }

}



@Component({
    selector: 'dialog-contact-example-dialog',
    templateUrl: 'dialog-contact-example-dialog.html',
  })
  export class DialogContactExampleDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  
  }

  
@Component({
    selector: 'dialog-attachment',
    templateUrl: 'dialog-attachment.html',
  })
  export class DialogAttachmentDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {} 
  }
export interface transactionGrid {
    invoiceDate: string;
    hist: string;
    type: string;
    status: string;
    invoice:number;
    description:string;
    reimb:string;
    att:string;
    route:string;
    totalAmount:number;
    rententionAmount:number;
    payableAmount:number;

  }
  const ELEMENT_DATA: transactionGrid[] = [
    {invoiceDate: '5th Aug 2018', hist: '', type:'Invoice', status: 'FDO Approved',invoice:15029.00-22,description:'Professional Services 4/1/18 - 4/30/18',reimb:'',att:'',route:'',totalAmount:194750,rententionAmount:1947.50,payableAmount:27.00},
    {invoiceDate: '5th Aug 2018', hist: '', type:'Invoice', status: 'FDO Approved',invoice:15029.00-22,description:'Professional Services 4/1/18 - 4/30/18',reimb:'',att:'',route:'',totalAmount:194750,rententionAmount:1947.50,payableAmount:500.00},
    {invoiceDate: '5th Aug 2018', hist: '', type:'Invoice', status: 'FDO Approved',invoice:15029.00-22,description:'Professional Services 4/1/18 - 4/30/18',reimb:'',att:'',route:'',totalAmount:194750,rententionAmount:1947.50,payableAmount:9356.00 },
    {invoiceDate: '5th Aug 2018', hist: '', type:'Invoice', status: 'FDO Approved',invoice:15029.00-22,description:'Professional Services 4/1/18 - 4/30/18',reimb:'',att:'',route:'',totalAmount:194750,rententionAmount:1947.50,payableAmount:9463.00},
    {invoiceDate: '5th Aug 2018', hist: '', type:'Invoice', status: 'FDO Approved',invoice:15029.00-22,description:'Professional Services 4/1/18 - 4/30/18',reimb:'',att:'',route:'',totalAmount:194750,rententionAmount:1947.50,payableAmount:9345.00},
    {invoiceDate: '5th Aug 2018', hist: '', type:'Invoice', status: 'FDO Approved',invoice:15029.00-22,description:'Professional Services 4/1/18 - 4/30/18',reimb:'',att:'',route:'',totalAmount:194750,rententionAmount:1947.50,payableAmount:1401.00},
    {invoiceDate: '5th Aug 2018', hist: '', type:'Invoice', status: 'FDO Approved',invoice:15029.00-22,description:'Professional Services 4/1/18 - 4/30/18',reimb:'',att:'',route:'',totalAmount:194750,rententionAmount:1947.50,payableAmount:3855.00},
    {invoiceDate: '5th Aug 2018', hist: '', type:'Invoice', status: 'FDO Approved',invoice:15029.00-22,description:'Professional Services 4/1/18 - 4/30/18',reimb:'',att:'',route:'',totalAmount:194750,rententionAmount:1947.50,payableAmount:2166.00},
    {invoiceDate: '5th Aug 2018', hist: '', type:'Invoice', status: 'FDO Approved',invoice:15029.00-22,description:'Professional Services 4/1/18 - 4/30/18',reimb:'',att:'',route:'',totalAmount:194750,rententionAmount:1947.50,payableAmount:2920.00}
   
  ];