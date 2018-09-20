import { Component } from '@angular/core';

@Component({
  selector: 'app-maintain-user',
  templateUrl: './maintain-user.component.html',
  styleUrls: ['./maintain-user.component.scss']
})
export class MaintainUserComponent  {

  displayedColumns = ['user', 'loginAs', 'loginID', 'password','role','dashboard','lastLogin','disabled'];
  dataSource = ELEMENT_DATA;

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