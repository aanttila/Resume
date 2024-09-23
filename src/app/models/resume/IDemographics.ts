export interface IDemographics {
  firstName: string;
  lastName: string;
  address?: IAddress;
}

export interface IAddress {
  city?: string;
  state: string;
  postalCode: string;
}
