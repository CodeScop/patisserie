import Pastry from '../models/pastry.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class PastryService {

  api_url = 'http://localhost:3000';
  pastryUrl = `${this.api_url}/api/pastries`;

  constructor(
    private http: HttpClient
  ) { }

  createPastry(pastry: Pastry): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.pastryUrl}`, pastry);
  }

  getPastries(): Observable<Pastry[]>{
    return this.http.get(this.pastryUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Pastry[];
    }))
  }

  editPastry(pastry:Pastry){
    let editUrl = `${this.pastryUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, pastry);
  }

  deletePastry(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.pastryUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }
}
