import { string, z } from "zod";

export const contactsInCustomer = z.object({
  type: z.string(),
  contact: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  id: z.string(),
});

export const newCustomerSchema = z.object({
  name: z.string().max(20),
  email: z.string().email().max(35),
  phone: z.string().length(11),
});

export const patchCustomerSchema = newCustomerSchema.omit({
  email: true,
  phone: true,
});

export const returnCustomerSchema = newCustomerSchema
  .omit({
    email: true,
    phone: true,
  })
  .extend({
    id: z.string(),
    createdAt: z.string(),
    contacts: z.array(contactsInCustomer).optional(),
  });

export const returnListCustomersSchema = z.array(returnCustomerSchema);
