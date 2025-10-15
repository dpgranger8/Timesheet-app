import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments';
import { Department } from '../../interfaces/department';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../modules/material-module';
import { Employee } from '../../interfaces/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-timesheet',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  templateUrl: './timesheet.html',
  styleUrl: './timesheet.scss'
})

export class Timesheet implements OnInit {
  department!: Department;
  departments!: Department[];
  employeeNameFC = new FormControl('', this.nameValidator());

  employees: Employee[] = [];
  employeeID = 0;

  constructor(
    private departmentsService: DepartmentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
    this.department = this.departments.find(
      (department) => department.id === this.route.snapshot.params['id']
    )!;
  }

  addEmployee(): void {
    if (this.employeeNameFC.value) {
      this.employeeID++;
      this.employees.push({
        id: this.employeeID.toString(),
        departmentID: this.department?.id,
        name: this.employeeNameFC.value,
        payRate: Math.floor(Math.random() * 50) + 50,
      });

      this.employeeNameFC.setValue('');
    }
  }

  onSubmit() {
    if (this.employeeNameFC.valid) {
      this.addEmployee()
    }
  }

  nameValidator(): ValidatorFn {
    return (control:AbstractControl): { [key: string]: any } | null => {
      let error = null;
      if (this.employees && this.employees.length) {
        this.employees.forEach(employee => {
          //compare the lowercase input value with all the existing employee names already in the array
          if (employee.name.toLowerCase() === control.value.toLowerCase()) {
            error = {duplicate: true};
          }
        })
      }
      return error;
    }
  }
  
}
