import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { TooltipArea } from '@swimlane/ngx-charts';
export interface DialogData {
    animal: 'panda' | 'unicorn' | 'lion';
  }


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent{

  displayedColumns = ['pdf', 'att', 'college', 'project','proj','contractor',"inv#",'type','invDate','signerName','signerEmail','status','timeSent','timeDelivered','timeSigned','declinedReason','timeDeclined','total','payable','owner'];
    dataSource = ELEMENT_DATA;

    constructor(public dialog: MatDialog) {}

    openDialog() {
      this.dialog.open(DialogAttDialog, {       
      });
    }

       openDialogAttachments() {
        this.dialog.open(DialogAttachmentDialog, {         
        });
      }

      getTotalCost() {
        return this.dataSource.map(t => t.total).reduce((acc, value) => acc + value, 0);
      }
      // getTotalCostrent() {
      //   return this.dataSource.map(t => t.rententionAmount).reduce((acc, value) => acc + value, 0);
      // }
      // getTotalCostpay() {
      //   return this.dataSource.map(t => t.payableAmount).reduce((acc, value) => acc + value, 0);
      // }


}

@Component({
  selector: 'dialog-contact-example-dialog',
  templateUrl: 'dialog-contact-example-dialog.html',
})
export class DialogAttDialog {
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
  pdf: string;
  att: string;
  college: string;
  project: string;
  proj:number;
  contractor:string;
  inv:string;
  type:string;
  invDate:string;
  signerName:string;
  signerEmail:string;
  status:string;
  timeSent:string;
  timeDelivered:string;
  timeSigned:string;
  declinedReason:string;
  timeDeclined:string;
  total:number;
  payable: string;
  owner:string;

}


const ELEMENT_DATA: transactionGrid[] = [
  {pdf: '', att: '', college:'Anaheim', project: '7th and 10th Floors Buildout',proj:2649,contractor:'uploaded',inv:'',type:'',invDate:'',signerName:'Syn-Contractor1 Contractor',signerEmail:'contractor1maas@gmail.com',status:'Sent',timeSent:'8/10/2018 3:26:07',timeDelivered:'', timeSigned:'',declinedReason:'',timeDeclined:'',total:1956,payable:'',owner:''},
  {pdf: '', att: '', college:'Anaheim', project: '7th and 10th Floors Buildout',proj:2649,contractor:'uploaded',inv:'',type:'',invDate:'',signerName:'Syn-Contractor1 Contractor',signerEmail:'contractor1maas@gmail.com',status:'Sent',timeSent:'8/10/2018 3:26:07',timeDelivered:'', timeSigned:'',declinedReason:'',timeDeclined:'',total:756,payable:'',owner:''}, 
  {pdf: '', att: '', college:'Anaheim', project: '7th and 10th Floors Buildout',proj:2649,contractor:'uploaded',inv:'',type:'',invDate:'',signerName:'Syn-Contractor1 Contractor',signerEmail:'contractor1maas@gmail.com',status:'Sent',timeSent:'8/10/2018 3:26:07',timeDelivered:'', timeSigned:'',declinedReason:'',timeDeclined:'',total:2002,payable:'',owner:''},
  {pdf: '', att: '', college:'Anaheim', project: '7th and 10th Floors Buildout',proj:2649,contractor:'uploaded',inv:'',type:'',invDate:'',signerName:'Syn-Contractor1 Contractor',signerEmail:'contractor1maas@gmail.com',status:'Sent',timeSent:'8/10/2018 3:26:07',timeDelivered:'', timeSigned:'',declinedReason:'',timeDeclined:'',total:3756,payable:'',owner:''},
  
 
];