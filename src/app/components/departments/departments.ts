import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments';
import { Department } from '../../interfaces/department';

@Component({
  selector: 'app-departments',
  standalone: true,
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