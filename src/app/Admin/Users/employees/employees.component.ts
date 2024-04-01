import { Component, OnInit } from '@angular/core';
import EmployeeInterface from '../../../Core/Interfaces/Employee/EmployeeInterface';
import { JsonPipe } from '@angular/common';
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnInit {
  employesData: EmployeeInterface[] = [];
  constructor(public employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((data: any) => {
      this.employesData = data.employees;
      console.log(this.employesData);
    });
  }
  changeStatus(_id: string, status: boolean) {
    this.employeeService.changeStatus(_id, status).subscribe((data: any) => {
      console.log(data);
    });
  }

  addEmployee(employee: any) {
    this.employeeService.addEmployee(employee).subscribe((data: any) => {
      console.log(data);
    });
  }
}
