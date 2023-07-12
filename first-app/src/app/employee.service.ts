import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseUrl="http://localhost:8090/employ";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`)
  }

  addEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,employee)
  }
  getById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }
  updateEmployee(id:number, employee:Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,employee);
  }

  deleteEmployee(id: number):Observable<Object>{
   return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
