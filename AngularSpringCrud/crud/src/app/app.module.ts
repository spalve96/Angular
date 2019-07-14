import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesModule } from './modules/employees/employees.module';
import { ToastrModule } from 'ngx-toastr';
import { from } from 'rxjs';
import { EmployeeService } from './modules/shared/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterEmpolyeeComponent } from './modules/employees/register-empolyee/register-empolyee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule,
  MatInputModule, MatAutocompleteModule, MatCheckboxModule, MatButtonModule, MatRadioModule,
  MatToolbarModule, MatCardModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatListModule, MatStepperModule,
  MatTabsModule, MatButtonToggleModule, MatBadgeModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
  MatRippleModule, MatBottomSheetModule, MatDialogModule, MatSnackBarModule, MatTooltipModule, MatPaginatorModule,
  MatSortModule, MatTableModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // General Group
    BrowserModule, AppRoutingModule, EmployeesModule, HttpClientModule, FormsModule, ToastrModule.forRoot(),
    // Material group
    MatMenuModule, MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule,
    MatSlideToggleModule, BrowserAnimationsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule, MatExpansionModule, MatGridListModule,
    MatListModule, MatStepperModule, MatTabsModule, MatButtonToggleModule, MatBadgeModule, MatChipsModule, MatIconModule,
    MatProgressSpinnerModule, MatProgressBarModule, MatRippleModule, MatBottomSheetModule, MatDialogModule,
    MatSnackBarModule, MatTooltipModule, MatPaginatorModule, MatSortModule, MatTableModule
  ],
  providers: [EmployeeService, RegisterEmpolyeeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
