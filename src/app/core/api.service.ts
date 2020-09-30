import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { serverAddress } from './server-address';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(route: string, payload: object): any{
    return this.http.post( serverAddress + route , payload);
  }
}
