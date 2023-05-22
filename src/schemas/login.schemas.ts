import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().max(35),
  password: z.string().max(32),
});
