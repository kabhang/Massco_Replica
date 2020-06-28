import { Component } from '@angular/core';
import { PanelService } from '../panel.service';


@Component({
  selector: 'app-panel-view',
  templateUrl: './panel-view.component.html',
  styleUrls: ['./panel-view.component.css']
})


export class PanelViewComponent {
  selectePanelOptions: any = {};

  constructor(private panelService: PanelService) { }

  changePanelSelection(value, key){
    this.panelService.setPanelData(key, value);
  }

  ngOnInit() {
    this.panelService.getPanelData().subscribe(
      panelData => this.selectePanelOptions = panelData
    )
  }

}
