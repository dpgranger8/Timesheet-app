import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments';
import { Department } from '../../interfaces/department';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MaterialModule } from '../../modules/material-module';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-timesheet',
  standalone: true,
  imports: [
    MaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './timesheet.html',
  styleUrl: './timesheet.scss'
})

export class Timesheet implements OnInit {
  department!: Department;
  departments!: Department[];
  employeeNameFC = new FormControl('');

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
}
