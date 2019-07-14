import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/Employee.model';
import { EmployeeService } from '../../shared/employee.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-empolyee',
  templateUrl: './register-empolyee.component.html',
  styleUrls: ['./register-empolyee.component.css']
})
export class RegisterEmpolyeeComponent implements OnInit {

  constructor(private empService: EmployeeService, private router: Router) { }
  emp: Employee =
    {
      id: null,
      firstname: '',
      lastname: '',
      designation: '',
      contact: '',
      address: ''
    };
  ngOnInit() {
    this.emp = this.empService.getter();
  }
  saveEmployee(updateEmp: Employee) {
    if (updateEmp.id === null) {
      this.empService.saveEmployee(updateEmp).subscribe((data) => {
        console.log(data);
        this.router.navigate(['view']);
        // this.Reset();
      });
      // this.toastr.success('New Employee Added Successfully!', 'Employee Registeration');
    } else {
      this.empService.updateEmployee(updateEmp).subscribe();
      // console.log(updateEmp.id);
      this.Reset();
      // this.toastr.success('New Employee Updated Successfully!', 'Employee Updation');
    }
  }
  Reset() {
    this.emp = {
      id: null,
      firstname: '',
      lastname: '',
      designation: '',
      contact: '',
      address: ''
    };

  }
  cancel() {
    this.router.navigate(['/']);
  }
}
