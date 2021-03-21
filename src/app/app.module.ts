import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './employees/shared/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './employees/material/material.module';

@NgModule({
  declarations: [AppComponent, EmployeesComponent, EmployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
