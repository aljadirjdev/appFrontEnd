import { UserInterface } from '../User/UserInterface';

export interface CustomerInterface {
  _id: string;
  createAt: any;
  user: UserInterface;
  company: string;
  companyType: string;
  status: boolean;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
