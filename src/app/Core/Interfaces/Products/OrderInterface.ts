import { CustomerInterface } from '../Customer/CustomersInterface';
import { EmployeeInterface } from '../Employee/EmployeeInterface';
import ListProductInterface from './ListProductINterface';

interface OrderInterface {
  _id: number;
  serialNumber: number;
  orderStatus: string;
  orderSubTotal: number;
  ivaOrder: number;
  orderTotal: number;
  listProducts: ListProductInterface[];
  customer: CustomerInterface;
  employee: EmployeeInterface;
  orderCreationDate: Date;
}
export default OrderInterface;
