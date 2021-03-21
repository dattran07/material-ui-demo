import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  today = new Date();

  constructor() {}

  ngOnInit(): void {}

  departments = [
    { id: 1, value: 'Dep 1' },
    { id: 1, value: 'Dep 2' },
    { id: 1, value: 'Dep 3' },
  ];

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false),
  });

  onClear(): void {
    this.form.reset();
    this.generateFormGroup();
  }

  generateFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: '',
      hireDate: '',
      isPermanent: '',
    });
  }
}
