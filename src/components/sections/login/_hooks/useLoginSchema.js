import { string, object } from "yup";

export const loginSchema = object().shape({
  username: string().required(),
  password: string().min(8).required(),
});
