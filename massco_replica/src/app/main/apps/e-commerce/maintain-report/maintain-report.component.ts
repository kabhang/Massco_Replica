import { Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-maintain-report',
  templateUrl: './maintain-report.component.html',
  styleUrls: ['./maintain-report.component.scss']
})
export class MaintainReportComponent  {
  constructor(public dialog: MatDialog) {}

  
  displayedColumns = ['title', 'number','description','type'];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(maintainReportDialog , {
      data: {
        animal: 'panda'
      }
    });
  }
}



@Component({
  selector: 'maintain-report-edit',
  templateUrl: 'maintain-report-edit.html',
})

export class maintainReportDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

export interface PeriodicElement {
  title: string;
  number: string;
  description:string;
  type:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'Attachment Audit', number: '', description:'shows file uploads and attachment detail by user',type:'Utilities'},
  {title: 'Companies List', number: '', description:'',type:'Utilities'},
  {title: 'Finance Report', number: '', description:'finance report all campuses',type:'Financial'},
  {title: 'Finance Summary Measure J', number: '', description:'summary for Measure J',type:'Financial'},
  {title: 'PayApp', number: '', description:'payapp testing',type:'	Project'},
  {title: 'PayApp', number: '', description:'payapp testing',type:'	Project'},
  {title: 'PEPReport', number: '', description:'',type:'	Project'},
  {title: 'Project Detail', number: '', description:'	shows details of project from contracts and contractors',type:'	Project'},
  {title: 'Project Funding Report by Campus', number: '', description:'	',type:'	Financial'},
  {title: 'Project Funding Summary', number: '', description:'summary of all projects with all funding sources	',type:'	Financial'},
  {title: 'Transaction Extract (Raw Data)', number: '', description:'all transactions	',type:'		Utilities'},
  {title: 'WorkflowExport', number: '', description:'workflow export for Banner and Merina check	',type:'	none'},
  

 
 
 
];
