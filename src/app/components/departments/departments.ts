import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments';
import { Department } from '../../interfaces/department';
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
  ],
  templateUrl: './departments.html',
  styleUrls: ['./departments.scss']
})
export class Departments implements OnInit {
  departments!: Department[];

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
  }

  goToDepartment(departmentID: string) : void {
    this.router.navigate(['/timesheet', {id: departmentID}])
  }
}