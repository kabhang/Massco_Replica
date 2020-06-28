import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { maintainWorkflow } from '../common.model';
import { CommonService } from '../common.service';

@Component({
  selector: 'maintain-workflow',
  templateUrl: './maintain-workflow.component.html',
  styleUrls: ['./maintain-workflow.component.scss']
})

export class MaintainWorkflowComponent{

  dataSource = new UserDataSource(this.commonService);
  constructor(
  private commonService: CommonService) {}
  displayedColumns: string[] = ['role', 'description', 'user', 'routingType','limit']; 

}

export class UserDataSource extends DataSource<any> {
  constructor(private commonService: CommonService) {
    super();
  }
  connect(): Observable<maintainWorkflow[]> {
    return this.commonService.getWorkflow();
  }
  disconnect() {}


}