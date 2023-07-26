import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from 'src/app/features/login/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly endpoint = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient) { }

  public loginAuthentication(loginInformations: Login): Observable<object> {
    return this.http.post(this.endpoint, loginInformations);
  }
}
