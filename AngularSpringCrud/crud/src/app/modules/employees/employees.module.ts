import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterEmpolyeeComponent } from './register-empolyee/register-empolyee.component';
import { ViewEmpolyeeComponent } from './view-empolyee/view-empolyee.component';
import { EmployeeService } from '../shared/employee.service';
import { FormsModule } from '@angular/forms';
import { EditEmpolyeeComponent } from './edit-empolyee/edit-empolyee.component';

@NgModule({
  declarations: [RegisterEmpolyeeComponent, ViewEmpolyeeComponent, EditEmpolyeeComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [RegisterEmpolyeeComponent, ViewEmpolyeeComponent, EditEmpolyeeComponent],
  providers: [EmployeeService]
})
export class EmployeesModule { }
