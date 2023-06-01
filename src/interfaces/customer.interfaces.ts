import { z } from "zod";
import {
  newCustomerSchema,
  returnCustomerSchema,
  patchCustomerSchema,
} from "../schemas";

export type TPostCustomer = z.infer<typeof newCustomerSchema>;
export type TReturnCustomer = z.infer<typeof returnCustomerSchema>;
export type TPatchCustomer = z.infer<typeof patchCustomerSchema>;
