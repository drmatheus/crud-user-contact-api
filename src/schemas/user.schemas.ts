import { z } from "zod";

// export const contactInUser = z.object({
//   type: z.string(),
//   contact: z.string(),
//   createdAt: z.string(),
//   updatedAt: z.string(),
// });

export const newUserSchema = z.object({
  name: z.string().max(20),
  email: z.string().email().max(35),
  password: z.string().max(32),
});

export const patchUserSchema = z.object({
  name: z.string().max(20).optional(),
  email: z.string().email().max(35).optional(),
  password: z.string().optional(),
});

export const returnUserSchema = newUserSchema
  .omit({
    password: true,
  })
  .extend({
    id: z.string(),
    createdAt: z.string(),
    // contacts: z.array(contactInUser).optional(),
  });
