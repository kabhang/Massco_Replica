import { Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent  {
  constructor(public dialog: MatDialog) {}

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  displayedColumns = ['title', 'value'];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(CategoryCodeDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

}


@Component({
  selector: 'category-edit',
  templateUrl: 'category-edit.html',
})

export class CategoryCodeDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

export interface PeriodicElement {
  title: string;
  value: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'ACM', value: 'ACM'},
  {title: 'CSI', value: 'CSI'},
  {title: 'EEI', value: 'EEI'},
  {title: 'HSI', value: 'HSI'},
  {title: 'ITE', value: 'ITE'},
  {title: 'PEFI', value: 'PEFI'}
 
];