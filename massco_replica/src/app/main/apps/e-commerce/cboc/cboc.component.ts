import {Component} from '@angular/core';

export interface PeriodicElement {
  date: string;
  description: string;
  agenda: string;
  minutes: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {date: '9th June, 18', description: 'Lorem Ipsum is simply dummy text .', agenda:'', minutes: ''},
  {date: '11th July, 18', description: 'Lorem Ipsum has been the industry', agenda: '', minutes: ''},
  {date: '15th Aug, 18', description: 'It has survived not only five centuries', agenda:'', minutes: ''},
  {date: '18th Sept, 18', description: ' It was popularised in the 1960s', agenda:'', minutes: ''},
  {date: '20th Oct, 18', description: 'Letraset sheets containing Lorem Ipsum passages', agenda: '', minutes: ''},
  {date: '30th Nov, 18', description: 'More recently with desktop publishing software', agenda: '', minutes: ''},

];

@Component({
  selector: 'cboc',
  templateUrl: './cboc.component.html',
  styleUrls: ['./cboc.component.scss']
})
export class CBOCComponent  {

  displayedColumns: string[] = ['date', 'description', 'agenda', 'minutes'];
  dataSource = ELEMENT_DATA;

}
