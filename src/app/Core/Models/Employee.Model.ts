import EmployeeInterface from '../Interfaces/Employee/EmployeeInterface';

class EmployeeModel {
  _id: number;
  user: EmployeeInterface;
  login: string;
  password: string;
  profile: Object;
  status: Boolean;
  constructor(
    _id: number,
    user: EmployeeInterface,
    login: string,
    password: string,
    profile: Object,
    status: Boolean
  ) {
    this._id = _id;
    this.user = user;
    this.login = login;
    this.password = password;
    this.profile = profile;
    this.status = status;
  }
}
export default EmployeeModel;
