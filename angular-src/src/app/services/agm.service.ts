import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AgmService {

  constructor(private http:Http) { }

  getAgm(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //let ep = this.prepEndpoint('users/profile');
    return this.http.get('http://localhost:3000/locations/dashboard',{headers: headers})
      .map(res => res.json());
  }

}


