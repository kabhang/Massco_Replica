import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges, Output, EventEmitter } from '@angular/core';

export interface alertOpt {

  viewValue: string;
}


export interface PeriodicElement {
  description: string;
  type: string;
  info: number;
  project: string;
  college: string;
}


const ELEMENT_DATA1: PeriodicElement[] = [
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'Expired Insurance', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Expired Insurance', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  }

];


const ELEMENT_DATA2: PeriodicElement[] = [
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'Expired Inshurance', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Expired Inshurance', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Expired Inshurance', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Expired Inshurance', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  }

];

const ELEMENT_DATA: PeriodicElement[] = [
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'Expired Contract',
    info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'Expired Contract',
    info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Expired Insurance', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Expired Insurance', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Flagged Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Flagged Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  }

];


const ELEMENT_DATA3: PeriodicElement[] = [
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'Flagged Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Flagged Items', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  { 
    description: 'Day Construction Inspection - DSA Inspector', 
    type: 'Flagged Items', info: 10 / 1 / 2016, 
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim' }
  

];

const ELEMENT_DATA4: PeriodicElement[] = [
  {
    description: 'Alexanders Mobility Service - Rental of Pallet Racks',
    type: 'Expired Contracts', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	',
    college: 'Anheim'
  },
  {
    description: 'Caltec  Corp - Concrete Slab/Enclose storage rooms',
    type: 'Expired Contracts', info: 10 / 1 / 2016,
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim'
  },
  { 
    description: 'Day Construction Inspection - DSA Inspector', 
    type: 'Expired Contracts', info: 10 / 1 / 2016, 
    project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
    college: 'Anheim' },
    { 
      description: 'Day Construction Inspection - DSA Inspector', 
      type: 'Expired Contracts', info: 10 / 1 / 2016, 
      project: 'Reactivate 1st Floor Warehouse Areas for Storage	', 
      college: 'Anheim' }
  
];

@Component({
  selector: 'app-expansion-health',
  templateUrl: './expansion-health.component.html',
  styleUrls: ['./expansion-health.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionHealthComponent implements OnInit {
  @Input() selectedPanelOption;
  @Output() changePanelSelection: EventEmitter<string> = new EventEmitter<string>();

  public show:boolean = false;
  public buttonName:any = 'Show';

  periodItems: PeriodicElement[];
  alertOpt: alertOpt[] = [
    {  viewValue: 'All Alerts' },
    {  viewValue: 'Flagged Items' },
    {  viewValue: 'Expired Contracts' },
    {  viewValue: 'Expired Insurance' }
  ];

  panelKey = 'three';

  displayedColumns: string[] = ['description', 'type', 'info', 'project', 'college'];
  alertType: any;
  dataSource = ELEMENT_DATA;



  ngOnInit(): void {
    // this.showPeriodItems(this.selectedPanelOption);
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
      // TODO: change it to switch case
      if(selected === 'All Alerts') {
        this.dataSource = ELEMENT_DATA
      }
      if(selected === 'Flagged Items') {
        this.dataSource = ELEMENT_DATA3
      }
      if(selected === 'Expired Contracts') {
        this.dataSource = ELEMENT_DATA4
      }
      if(selected === 'Expired Insurance') {
        this.dataSource = ELEMENT_DATA1
      }
  }

}
