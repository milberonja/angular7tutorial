import { catchError } from 'rxjs/operators';
import { FormUser } from './../form-user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private url = 'http://localhost:3000/enrollent';

  constructor(private http: HttpClient) { }

  enrollment(user: FormUser){
    return this.http.post<any>(this.url, user)
    .pipe(catchError(this.errorHendling));
  }

  errorHendling(error: HttpErrorResponse){
    return throwError(error);
  }
}
