import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Employee } from 'src/app/model/Employee.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
const headeroption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private router: Router) { }
  url = 'http://localhost:8083/employee';

  emp: Employee =
    {
      id: null,
      firstname: '',
      lastname: '',
      designation: '',
      contact: '',
      address: ''
    };
  // Fetching all data from database
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/' + 'getAllEmp', headeroption);
  }
  // Insertion of data
  saveEmployee(newEmp: Employee) {
    return this.http.post(this.url + '/' + 'saveEmp', newEmp, headeroption);
  }
  // Update Employee
  updateEmployee(updatedEmp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url + '/' + 'updateEmp', updatedEmp, headeroption);
  }
  // Delete Employee
  deleteEmployee(id: number) {
    return this.http.delete(this.url + '/deleteEmp/' + id);

  }
  setter(emp: Employee) {
    this.emp = emp;
    this.router.navigate(['register']);
  }
  getter() {
    return this.emp;
  }
}
