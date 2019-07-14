import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterEmpolyeeComponent } from './modules/employees/register-empolyee/register-empolyee.component';
import { Employee } from './model/Employee.model';
import { EmployeeService } from './modules/shared/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  constructor(private router: Router, private empService: EmployeeService) {

  }
  viewAll() {
    this.router.navigate(['view']);
  }
  addNew() {
    this.empService.emp = new Employee();
    this.router.navigate(['register']);
  }
}
