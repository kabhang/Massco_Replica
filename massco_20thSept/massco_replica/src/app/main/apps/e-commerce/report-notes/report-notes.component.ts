import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'report-notes',
  templateUrl: './report-notes.component.html',
  styleUrls: ['./report-notes.component.scss']
})
export class ReportNotesComponent  {

  heroes = [''];

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }


  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}

