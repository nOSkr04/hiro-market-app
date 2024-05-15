import { IUser } from "../interfaces/user";

export type AccountType = "NORMAL" | "BUSINESS" | "GOVERMENT";

export class User implements IUser {
  _id: string;
  phone: string;

  constructor({ _id, phone }: IUser) {
    this._id = _id;
    this.phone = phone;
  }

  static fromJson(json: IUser) {
    return new User(json);
  }
}
