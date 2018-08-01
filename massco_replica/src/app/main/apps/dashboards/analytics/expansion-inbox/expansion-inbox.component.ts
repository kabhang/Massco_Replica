import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges, Output, EventEmitter } from '@angular/core';

export interface alertOpt {
  value: string;
  viewValue: string;
}


export interface PeriodicElement {
  description: string;
  type: string;
  info: number;
  project: string;
  college: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'My Open Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'My Open Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  }

];


const ELEMENT_DATA2: PeriodicElement[] = [
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'Approved Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Approved Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Approved Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Approved Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  }

];


const ELEMENT_DATA3: PeriodicElement[] = [
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'Rejected Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Rejected Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  { 
    description: 'Day Construction Inspection - DSA Inspector', 
    type: 'Rejected Items', info: 10 / 1 / 2016, 
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim' }
];

const ELEMENT_DATA4: PeriodicElement[] = [
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'FDO Approved Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'FDO Approved Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  { 
    description: 'Day Construction Inspection - DSA Inspector', 
    type: 'FDO Approved Items', info: 10 / 1 / 2016, 
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim' }
];

const ELEMENT_DATA5: PeriodicElement[] = [
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'Open Workflow Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Open Workflow Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  { 
    description: 'Day Construction Inspection - DSA Inspector', 
    type: 'Open Workflow Items', info: 10 / 1 / 2016, 
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim' }
];

const ELEMENT_DATA6: PeriodicElement[] = [
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'DocuSign Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'DocuSign Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  { 
    description: 'Day Construction Inspection - DSA Inspector', 
    type: 'DocuSign Items', info: 10 / 1 / 2016, 
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim' },
    {
      description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
      type: 'DocuSign Items', info: 10 / 1 / 2016,
      project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
      college: 'Anheim'
    },
    { 
      description: 'Day Construction Inspection - DSA Inspector', 
      type: 'DocuSign Items', info: 10 / 1 / 2016, 
      project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
      college: 'Anheim' }
];

@Component({
  selector: 'app-expansion-inbox',
  templateUrl: './expansion-inbox.component.html',
  styleUrls: ['./expansion-inbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionInboxComponent implements OnInit {
  @Input() selectedPanelOption;
  @Output() changePanelSelection: EventEmitter<string> = new EventEmitter<string>();

  public show:boolean = false;
  public buttonName:any = 'Show';

  periodItems: PeriodicElement[];
  alertOpt: alertOpt[] = [
    { value: 'My Open Items', viewValue: 'My Open Items' },
    { value: 'My Approved Items', viewValue: 'My Approved Items' },
    { value: 'My Rejected Items', viewValue: 'My Rejected Items' },
    { value: 'All FDO Approved Items', viewValue: 'All FDO Approved Items' },
    { value: 'All Open Workflow Items', viewValue: 'All Open Workflow Items' },
    { value: 'DocuSign Items', viewValue: 'DocuSign Items' }
    
  ];


  displayedColumns: string[] = ['description', 'type', 'info', 'project', 'college'];
  alertType: any;
  dataSource = ELEMENT_DATA;
  panelKey = 'two';
  
  ngOnInit(): void {
  //  this.showPeriodItems();
  }


  ngOnChanges(changes: SimpleChanges){
    if(changes.selectedPanelOption.currentValue !== changes.selectedPanelOption.previousValue){
      this.showPeriodItems(this.selectedPanelOption);
    }
  }

  changePeriodSelection(selected?: string){
    this.changePanelSelection.emit(selected)
  }

  showPeriodItems (selected?: string){
      // ajax call and pass selected parameter to server
      // or
      // direct load data based on selected value
      
      if(selected === ' My Open Items') {
        this.dataSource = ELEMENT_DATA
      } 
      if(selected === 'My Approved Items') {
        this.dataSource = ELEMENT_DATA2
      }
      if(selected === 'My Rejected Items') {
        this.dataSource = ELEMENT_DATA3
      }
      if(selected === 'All FDO Approved Items') {
        this.dataSource = ELEMENT_DATA4
      }
      if(selected === 'All Open Workflow Items') {
        this.dataSource = ELEMENT_DATA5
      }
      if(selected === 'DocuSign Items') {
        this.dataSource = ELEMENT_DATA6
      }
  }


}
