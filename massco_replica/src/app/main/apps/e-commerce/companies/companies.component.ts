import { Component } from '@angular/core';


export interface PeriodicElement {
  name: string;
  addressOne: string;
  contact: string;
  phoneOne: number;
  phoneTwo:number;
  email:string;
  fax:string;
  type:string;
  dir:number;
  licenseNo:string;
  bannerID:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'All Rain Roofing', addressOne: '12310 Janelle Ct', contact: '', phoneOne:909-238-8508 ,phoneTwo:0,email:'',fax:'',type:'',dir:1000014651,licenseNo:'',bannerID: 1580346},
  {name: 'All Rain Roofing', addressOne: '19310 Janelle Ct., Mira Loma, CA 91752', contact: 'Oscar Rodriguez', phoneOne: 909-238-8508,phoneTwo:0,email:'allrainroofing@gmail.com	',fax:'',type:'',dir:1000014651,licenseNo:'725233',bannerID: 1580346},
  {name: 'Allison Mechanical, Inc', addressOne: '1968 Essex Ct., Readlands, CA 92373', contact: 'Bonnie Gordon', phoneOne: 909-478-5633,phoneTwo:0,email:'bgordon@allison1.net	',fax:'',type:'',dir:1000002213,licenseNo:'679866',bannerID: 1580346},
  {name: 'Allsteel Inc', addressOne: 'c/o Corporate Bus Interiors', contact: 'Bonnie Gordon', phoneOne: 909-478-5633,phoneTwo:0,email:'bgordon@allison1.net	',fax:'',type:'',dir:1000003129,licenseNo:'679866',bannerID: 696666},
  {name: 'Aloha Island Cable Inc', addressOne: 'dba: CableMasters', contact: 'Bonnie Gordon', phoneOne: 909-478-5633,phoneTwo:0,email:'bgordon@allison1.net	',fax:'',type:'',dir:1000003858,licenseNo:'679866',bannerID: 1340659},
  {name: 'Amazing Electric Inc', addressOne: '2484 Olive Ave., Altadena, CA 91001', contact: 'Homan Dian', phoneOne: 213-300-6051,phoneTwo:0,email:'Homan@amazingelectricin',fax:'',type:'',dir:1000003858,licenseNo:'679866',bannerID: 1340659},
  {name: 'All Rain Roofing', addressOne: '12310 Janelle Ct', contact: '', phoneOne:909-238-8508 ,phoneTwo:0,email:'',fax:'',type:'',dir:1000014651,licenseNo:'',bannerID: 1580346},
  {name: 'All Rain Roofing', addressOne: '19310 Janelle Ct., Mira Loma, CA 91752', contact: 'Oscar Rodriguez', phoneOne: 909-238-8508,phoneTwo:0,email:'allrainroofing@gmail.com	',fax:'',type:'',dir:1000014651,licenseNo:'725233',bannerID: 1580346},
  {name: 'Allison Mechanical, Inc', addressOne: '1968 Essex Ct., Readlands, CA 92373', contact: 'Bonnie Gordon', phoneOne: 909-478-5633,phoneTwo:0,email:'bgordon@allison1.net	',fax:'',type:'',dir:1000002213,licenseNo:'679866',bannerID: 1580346},
  {name: 'Allsteel Inc', addressOne: 'c/o Corporate Bus Interiors', contact: 'Bonnie Gordon', phoneOne: 909-478-5633,phoneTwo:0,email:'bgordon@allison1.net	',fax:'',type:'',dir:1000003129,licenseNo:'679866',bannerID: 696666},
  {name: 'Aloha Island Cable Inc', addressOne: 'dba: CableMasters', contact: 'Bonnie Gordon', phoneOne: 909-478-5633,phoneTwo:0,email:'bgordon@allison1.net	',fax:'',type:'',dir:1000003858,licenseNo:'679866',bannerID: 1340659},
  {name: 'Amazing Electric Inc', addressOne: '2484 Olive Ave., Altadena, CA 91001', contact: 'Homan Dian', phoneOne: 213-300-6051,phoneTwo:0,email:'Homan@amazingelectricin',fax:'',type:'',dir:1000003858,licenseNo:'679866',bannerID: 1340659},

];
@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent  {
  displayedColumns: string[] = ['name', 'addressOne', 'contact', 'phoneOne', 'phoneTwo', 'email', 'fax', 'type','dir','licenseNo','bannerID'];
  dataSource = ELEMENT_DATA;

}
