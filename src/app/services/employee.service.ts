import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmployeeInterface } from '../model/employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public url = './assets/data/employees.json';

  constructor(private http: HttpClient) { }

  
  getEmployees(): Observable<EmployeeInterface[]>{
    return this.http.get<EmployeeInterface[]>(this.url)
                    .pipe(
                      catchError((error: HttpErrorResponse) => {
                        return throwError(error.message || "Server Error");
                      })
                    );
  };
    

  
  
}
