import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';


export interface cboc {
  date: string;
  description: string;
  agenda: string;
  minutes: string;
}


@Injectable()
export class CbocService {
  private serviceUrl="assets/contact.json"

  constructor(private http:HttpClient) { }

  getUser():Observable<cboc[]>{
    console.log(this.serviceUrl);
    return this.http.get<cboc[]>(this.serviceUrl);
}
}
