import { z } from "zod";
import { newUserSchema, patchUserSchema, returnUserSchema } from "../schemas";

export type TPostUser = z.infer<typeof newUserSchema>;
export type TPatchUser = z.infer<typeof patchUserSchema>;
export type TReturnUser = z.infer<typeof returnUserSchema>;
