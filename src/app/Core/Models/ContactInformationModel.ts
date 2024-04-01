class ContactInformationModel {
  public phone: String;
  public country: string;
  public state: string;
  public city: string;
  public address: string;
  constructor(
    phone: string,
    country: string,
    state: string,
    city: string,
    address: string
  ) {
    this.phone = phone;
    this.country = country;
    this.state = state;
    this.city = city;
    this.address = address;
  }
}
export default ContactInformationModel;
