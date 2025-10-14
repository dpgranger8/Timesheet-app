import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments';
import { Department } from '../../interfaces/department';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MaterialModule } from '../../modules/material-module';
import { Employee } from '../../interfaces/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  employeeNameFC = new FormControl('');

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
  
}
