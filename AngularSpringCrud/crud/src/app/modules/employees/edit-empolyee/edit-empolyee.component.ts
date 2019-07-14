import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-edit-empolyee',
  templateUrl: './edit-empolyee.component.html',
  styleUrls: ['./edit-empolyee.component.css']
})
export class EditEmpolyeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

}
