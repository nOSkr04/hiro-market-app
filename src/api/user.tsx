import { User } from "../models/user";
import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const me = async () => {
  const res = await httpRequest.get("/user/me");
  return User.fromJson(res);
};
