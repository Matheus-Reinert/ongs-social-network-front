import { HttpClient } from '@angular/common/http';
import { RequestLogin } from 'src/app/resources/models/login/RequestLogin';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ResponseLogin } from '../../models/login/ResponseLogin';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {

  }

  public doLogin(requestLogin:RequestLogin): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>(
      'http://localhost:8080/login',
       requestLogin);
  }
}
