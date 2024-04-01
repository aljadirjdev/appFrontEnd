import ContactInformationInterface from './ContactInformationInterface';

export interface UserInterface {
  _id: number;
  name: string;
  email: string;
  typeOfDocument: string;
  documentNumber: string;
  contactInformation: ContactInformationInterface;
}

export default UserInterface;
