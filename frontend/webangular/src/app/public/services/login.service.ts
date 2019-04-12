import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  constructor(private http: HttpClient) {
    this.loginUrl = "http://localhost:3000/api/v1/login";

  }

  login(login: Login): Observable<any> {

    return this.http.post<Login>(this.loginUrl, login, this.httpOptions)
      .pipe(
        catchError(this.handleError('login',[]))
      );
  }

  private handleError (operation = 'operation', result?) {
    return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return [];
    };
  }

}
