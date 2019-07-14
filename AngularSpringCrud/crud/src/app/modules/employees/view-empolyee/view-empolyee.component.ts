import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/Employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-empolyee',
  templateUrl: './view-empolyee.component.html',
  styleUrls: ['./view-empolyee.component.css']
})
export class ViewEmpolyeeComponent implements OnInit {
  allEmployee: Employee[];
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getAllEmployees();
  }
  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((data) => {
      console.log(data);
      this.allEmployee = data;
    });
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe();
    this.router.navigate(['/']);

  }
  editEmployee(emp: Employee) {
    this.employeeService.setter(emp);
  }
  cancel() {
    this.router.navigate(['/']);
  }
}
