import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-maintain-user',
  templateUrl: './maintain-user.component.html',
  styleUrls: ['./maintain-user.component.scss']
})
export class MaintainUserComponent  {
  constructor(public dialog: MatDialog) {}

  displayedColumns = ['user', 'loginAs', 'loginID', 'password','role','dashboard','lastLogin','disabled'];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(maintainDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

}

@Component({
  selector: 'maintain-edit',
  templateUrl: 'maintain-edit.html',
})

export class maintainDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}


export interface PeriodicElement {
  user: string;
  loginAs: string;
  loginID: string;
  password: string;
  role: string;
  dashboard:string;
  lastLogin:string;
  disabled:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {user: 'Albert Miranda NOCCCD', loginAs: '',loginID:'amiranda@cypresscollege.edu', password: '0A966aT8', role: 'Accountant View Only',dashboard:'Integrated', lastLogin:'19thSept,18',disabled:''},
  {user: 'Albert Miranda NOCCCD', loginAs: '',loginID:'amiranda@cypresscollege.edu', password: '0A966aT8', role: 'Accountant View Only',dashboard:'Integrated', lastLogin:'19thSept,18',disabled:''},
  {user: 'Albert Miranda NOCCCD', loginAs: '',loginID:'amiranda@cypresscollege.edu', password: '0A966aT8', role: 'Accountant View Only',dashboard:'Integrated', lastLogin:'19thSept,18',disabled:''},
  {user: 'Albert Miranda NOCCCD', loginAs: '',loginID:'amiranda@cypresscollege.edu', password: '0A966aT8', role: 'Accountant View Only',dashboard:'Integrated', lastLogin:'19thSept,18',disabled:''},
  {user: 'Albert Miranda NOCCCD', loginAs: '',loginID:'amiranda@cypresscollege.edu', password: '0A966aT8', role: 'Accountant View Only',dashboard:'Integrated', lastLogin:'19thSept,18',disabled:''},
  {user: 'Albert Miranda NOCCCD', loginAs: '',loginID:'amiranda@cypresscollege.edu', password: '0A966aT8', role: 'Accountant View Only',dashboard:'Integrated', lastLogin:'19thSept,18',disabled:''},
  {user: 'Albert Miranda NOCCCD', loginAs: '',loginID:'amiranda@cypresscollege.edu', password: '0A966aT8', role: 'Accountant View Only',dashboard:'Integrated', lastLogin:'19thSept,18',disabled:''},
  {user: 'Albert Miranda NOCCCD', loginAs: '',loginID:'amiranda@cypresscollege.edu', password: '0A966aT8', role: 'Accountant View Only',dashboard:'Integrated', lastLogin:'19thSept,18',disabled:''},
  {user: 'Albert Miranda NOCCCD', loginAs: '',loginID:'amiranda@cypresscollege.edu', password: '0A966aT8', role: 'Accountant View Only',dashboard:'Integrated', lastLogin:'19thSept,18',disabled:''},
  

];