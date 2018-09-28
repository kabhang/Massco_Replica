import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './contact';


@Injectable()
export class ContactService {
  private serviceUrl="assets/contact.json"

  constructor(private http:HttpClient) { }

  getUser():Observable<User[]>{
    console.log(this.serviceUrl);
    return this.http.get<User[]>(this.serviceUrl);


  }
}
