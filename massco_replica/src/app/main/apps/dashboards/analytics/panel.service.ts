import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  constructor() { }
  panelData = new BehaviorSubject<any>({});

  getPanelData (){
    return this.panelData.asObservable();
  }

  setPanelData (key, value){
    let panelData = this.panelData.getValue();
    panelData[key] = value;
    this.panelData.next(panelData);
  }
}
