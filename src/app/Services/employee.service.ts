import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const base_url = environment.baseURL;
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private HttpClient: HttpClient) {}
  getAllEmployees() {
    return this.HttpClient.get(`${base_url}/employees`);
  }
  changeStatus(id: string, status: boolean) {
    return this.HttpClient.put(`${base_url}/employees/${id}`, { status });
  }

  addEmployee(employee: any) {
    return this.HttpClient.post(`${base_url}/employees`, employee);
  }

  updateEmployee(employee: any) {
    return this.HttpClient.put(
      `${base_url}/employees/${employee._id}`,
      employee
    );
  }
  deleteEmployee(id: string) {
    return this.HttpClient.delete(`${base_url}/employees/${id}`);
  }
}
