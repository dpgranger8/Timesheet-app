import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments';
import { Department } from '../../interfaces/department';
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';

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

  constructor(private departmentsService: DepartmentsService) {}

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
  }
}