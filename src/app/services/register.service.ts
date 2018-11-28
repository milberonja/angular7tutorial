import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:3000/enrollent';

  constructor(private http: HttpClient) { }

  register(dataFromForm){
    return this.http.post<any>(this.url, dataFromForm);
  }
}
