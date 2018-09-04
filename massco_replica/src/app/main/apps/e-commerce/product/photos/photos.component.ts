import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  
})
export class PhotosComponent {
  constructor(public dialog: MatDialog) {}
  displayedColumns = ['edit', 'thumbnail', 'title', 'description','order','publish','original'];
  dataSource = ELEMENT_DATA;


  openDialog() {
    const dialogRef = this.dialog.open(PhotoEditDialog, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  
}

export interface PeriodicElement {
  edit: string;
  thumbnail: string;
  title: string;
  description: string;
  order:number;
  publish:string;
  original:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {edit: '', thumbnail: '', title: '7th and 10th Floor', description: 'Campus Overhead View of Floor Build Out',order:1,publish:'yes',original:'original'},
  {edit: '', thumbnail: '', title: '7th and 10th Floor', description: 'Campus Overhead View of Floor Build Out',order:1,publish:'yes',original:'original'},
  {edit: '', thumbnail: '', title: '7th and 10th Floor', description: 'Campus Overhead View of Floor Build Out',order:1,publish:'yes',original:'original'},
  {edit: '', thumbnail: '', title: '7th and 10th Floor', description: 'Campus Overhead View of Floor Build Out',order:1,publish:'yes',original:'original'},
  {edit: '', thumbnail: '', title: '7th and 10th Floor', description: 'Campus Overhead View of Floor Build Out',order:1,publish:'yes',original:'original'},
 
];

@Component({
  selector: 'photo-edit',
  templateUrl: 'photo-edit.html',
})
export class PhotoEditDialog {}