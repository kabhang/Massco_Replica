import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User,cboc, maintainhelp,maintainWorkflow,objectCode } from './common.model';


@Injectable()
export class CommonService {
  private serviceUrl="assets/common.json"

  constructor(private http:HttpClient) { }

  getUser():Observable<User[]>{
    console.log(this.serviceUrl);
    return this.http.get<User[]>(this.serviceUrl);}


    
  getCbocData():Observable<cboc[]>{
      console.log(this.serviceUrl);
      return this.http.get<cboc[]>(this.serviceUrl);
      }

  getMainatinHelp():Observable<maintainhelp[]>{
        console.log(this.serviceUrl);
        return this.http.get<maintainhelp[]>(this.serviceUrl);
        }
    

  getWorkflow():Observable<maintainWorkflow[]>{
        console.log(this.serviceUrl);
        return this.http.get<maintainWorkflow[]>(this.serviceUrl);
        }


        getObjectcode():Observable<objectCode[]>{
          console.log(this.serviceUrl);
          return this.http.get<objectCode[]>(this.serviceUrl);
          }



}
