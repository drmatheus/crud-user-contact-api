import { z } from "zod";
import { newContactSchema } from "../schemas/contact.schemas";

export type TPostContact = z.infer<typeof newContactSchema>;
export type TPatchContact = z.infer<typeof newContactSchema>;
