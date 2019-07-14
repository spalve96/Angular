import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterEmpolyeeComponent } from './modules/employees/register-empolyee/register-empolyee.component';
import { ViewEmpolyeeComponent } from './modules/employees/view-empolyee/view-empolyee.component';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'view', component: ViewEmpolyeeComponent },
  { path: 'register', component: RegisterEmpolyeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
