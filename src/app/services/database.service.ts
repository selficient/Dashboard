import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class DatabaseService {
  ip: string;
  constructor(private http: Http) {
    //this.ip = "http://154.16.159.176:3000"; //VPS
    this.ip = "http://localhost:3000" //Local
   }
  fetchHardware(){
    return this.http.get(this.ip + "/service/getallhardware")
      .map(res => res.json());
  }
  fetchActionLog(){
    return this.http.get(this.ip + "/service/getactionlog")
      .map(res => res.json());
  }
}
