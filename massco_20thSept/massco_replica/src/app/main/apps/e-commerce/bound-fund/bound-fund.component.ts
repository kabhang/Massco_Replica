import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-bound-fund',
  templateUrl: './bound-fund.component.html',
  styleUrls: ['./bound-fund.component.scss']
})
export class BoundFundComponent  {
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
    this.dialog.open(ObjectCodeDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

}

@Component({
  selector: 'bound-fund-edit',
  templateUrl: 'bound-fund-edit.html',
})

export class ObjectCodeDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

export interface PeriodicElement {
  title: string;
  value: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: '', value: ''},
 
];