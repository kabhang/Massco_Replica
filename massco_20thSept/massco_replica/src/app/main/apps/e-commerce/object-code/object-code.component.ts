import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'object-code',
  templateUrl: './object-code.component.html',
  styleUrls: ['./object-code.component.scss']
})
export class ObjectCodeComponent  {
  constructor(public dialog: MatDialog) {}

  displayedColumns = ['objectCode', 'description', 'budgetGroup', 'ObjectCodeGroup', 'action'];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(ObjectCodeDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
 

}


@Component({
  selector: 'object-code-edit',
  templateUrl: 'object-code-edit.html',
})

export class ObjectCodeDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

export interface PeriodicElement {
  objectCode: number;
  description: string;
  budgetGroup: string;
  ObjectCodeGroup: string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {objectCode: 41000, description: 'Software', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 42000, description: 'Books, Magazines, & Periodicals', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 43000, description: 'Instructional Supplies & Materials', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 44110, description: 'Noninstructional Supplies, Material', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 44120, description: 'Noninstr Supplies, Material, Abatem', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 44200, description: 'Grounds Supplies', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 44200, description: 'Vehicle Supplies', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 44300, description: 'Noninst Supplies-Food/Hospitality', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 44500, description: 'Computer Related Supplies', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 45100, description: 'Cost of Goods Sold - New Text', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 45150, description: 'Cost of Goods Sold - Used Text', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 45152, description: 'Cost of Goods Sold - eBooks', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 45155, description: 'Cost of Goods Sold - Textbook Renta', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 45200, description: 'Cost of Goods Sold - Trade', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},
  {objectCode: 45250, description: 'Cost of Goods Sold - Supplies', budgetGroup: '', ObjectCodeGroup: 'Soft Costs',action:''},

];