import UserInterface from '../User/UserInterface';

export interface EmployeeInterface {
  _id: number;
  user: UserInterface;
  login: string;
  password: string;
  profile: Object;
  status: Boolean;
}
export default EmployeeInterface;
