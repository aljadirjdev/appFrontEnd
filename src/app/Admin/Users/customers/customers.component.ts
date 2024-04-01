import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../Services/customer.service';
import { CustomerInterface } from '../../../Core/Interfaces/Customer/CustomersInterface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  customersData: CustomerInterface[] = [];
  constructor(public customerService: CustomerService) {}
  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data: any) => {
      this.customersData = data.customers;
      console.log(this.customersData);
      return this.customersData;
    });
  }
}
