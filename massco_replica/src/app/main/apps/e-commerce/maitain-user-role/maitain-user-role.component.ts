import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-maitain-user-role',
  templateUrl: './maitain-user-role.component.html',
  styleUrls: ['./maitain-user-role.component.scss']
})
export class MaitainUSerRoleComponent  {

  constructor(public dialog: MatDialog) {}

  displayedColumns = ['action','role', 'userType', 'description'];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(maintainUserDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

}



@Component({
  selector: 'maintain-user-edit',
  templateUrl: 'maintain-user-edit.html',
})

export class maintainUserDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}


export interface PeriodicElement {
  action: string;
  role: string;
  userType: string;
  description: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {action: '', role: 'Accountant View Only', userType: 'Read Only', description: 'View Only for All Areas'},
  {action: '', role: 'Accounting Assistant', userType: 'Read Only', description: 'Assist financial manager'},
  {action: '', role: 'Project Accountant', userType: 'Read Only', description: 'Financial Accountant with Full Rights'},
  {action: '', role: 'Project Manager', userType: 'Read Only', description: 'Project Manager with Limited Accounting Rights'},
  {action: '', role: 'Project Manager View Only', userType: 'Read Only', description: 'Project Manager with view only rights'},
  {action: '', role: 'Reports Only', userType: 'Read Only', description: 'Reports Only User'},
  {action: '', role: 'RFI Outside Veiw', userType: 'Read Only', description: 'RFI Access to Non-Maas Entities'},
  {action: '', role: 'TechSupport', userType: 'Read Only', description: 'Tech Support - Always has full rights (not editable)'},
  {action: '', role: 'Workflow Signator', userType: 'Read Only', description: 'Workflow Signator Only'},

 
  

];