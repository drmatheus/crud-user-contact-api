import { newContactSchema } from "./contact.schemas";
import {
  newCustomerSchema,
  returnCustomerSchema,
  patchCustomerSchema,
  returnListCustomersSchema,
} from "./customer.schema";
import { loginSchema } from "./login.schemas";
import {
  newUserSchema,
  patchUserSchema,
  returnUserSchema,
} from "./user.schemas";

export {
  patchUserSchema,
  returnUserSchema,
  newUserSchema,
  loginSchema,
  newCustomerSchema,
  returnCustomerSchema,
  patchCustomerSchema,
  returnListCustomersSchema,
  newContactSchema,
};
