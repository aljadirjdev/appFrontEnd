import ContactInformationInterface from '../Interfaces/User/ContactInformationInterface';

class UserModel {
  _id: string;
  name: string;
  email: string;
  password: string;
  contactInformation: ContactInformationInterface;
  status: boolean;

  createdAt: Date;
  updatedAt: Date;
  constructor(
    _id: string,
    name: string,
    email: string,
    password: string,
    contactInformation: ContactInformationInterface,
    status: boolean,
    createdAt: Date,
    updatedAt: Date
  ) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.contactInformation = contactInformation;
    this.status = status;

    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
export default UserModel;
