import { MaritalStatus } from "./MaritalStatus";

export interface IUser {
  id?: string;
  email: string;
  password: string;
  fullname: string;
  birthday: string;
  city: string;
  country: string;
  maritalStatus: MaritalStatus;
  job: string;
}
