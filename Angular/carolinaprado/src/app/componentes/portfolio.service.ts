import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  private readonly API = environment.api;

  portfolio:any;

  constructor(private http: HttpClient) {
    console.log('nome api::' ,environment.api)
   }


  getPortfolio(): Observable<any> {
    return this.http.get<any>(this.API);
  }

}
