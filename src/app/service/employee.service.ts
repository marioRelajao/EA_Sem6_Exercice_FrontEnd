import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarEmployee(id: String): Observable<any> {
    return this.http.get(this.url + id);
  } 

}
