import { Routes } from '@angular/router';

import { ProductsComponent } from './Admin/products/products.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { EmployeesComponent } from './Admin/Users/employees/employees.component';
import { CustomersComponent } from './Admin/Users/customers/customers.component';
import { StoreComponent } from './Pages/store/store.component';

export const routes: Routes = [
  {
    path: 'employees',
    title: 'Employees',
    component: EmployeesComponent,
  },
  {
    path: 'customers',
    title: 'Customers',
    component: CustomersComponent,
  },
  {
    path: 'products',
    title: 'Products',
    component: ProductsComponent,
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'store',
    title: 'Store',
    component: StoreComponent,
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
  },
];
