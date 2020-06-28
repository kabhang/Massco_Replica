import {Component, OnInit} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { CommonService } from '../common.service';
import { cboc } from '../common.model';








@Component({
  selector: 'cboc',
  templateUrl: './cboc.component.html',
  styleUrls: ['./cboc.component.scss']
})
export class CBOCComponent  implements OnInit  {

  dataSource = new UserDataSource(this.commonService);
  displayedColumns: string[] = ['date', 'description', 'agenda', 'minutes'];

  constructor(private commonService: CommonService) { }
  
  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private commonService: CommonService) {
    super();
  }
  connect(): Observable<cboc[]> {
    return this.commonService.getCbocData();
  }
  disconnect() {}
}
