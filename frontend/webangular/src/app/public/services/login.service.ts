import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LocalStorageService } from '../../services/local-storage.service';

interface LoginResponse {
  success: string;
  data: any;
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginUrl: string;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient, private localSt: LocalStorageService) {
    this.loginUrl = "http://localhost:3000/api/v1/login";
  }

  login(login: Login) {

    return this.http.post<LoginResponse>(this.loginUrl, login, this.httpOptions)
    .pipe(

      // map result
      map( (res) => {
        if (res.success) {
          let data = res.data;
          let sessionData = {
            id: data._id,
            username: data.username,
            role: data.permisos,
            access_jwt: res.access_token
          }

          this.localSt.set('sessionData', sessionData);
        }
        return res;
      }),
      // error
      catchError(err => {
        return throwError(err.error);
      })
    );
  }

}
