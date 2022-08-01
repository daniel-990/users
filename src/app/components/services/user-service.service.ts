import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<any>{
    let response = this.httpClient.get('https://localhost:7005/api/Cliente');
    return response;
  }
}
