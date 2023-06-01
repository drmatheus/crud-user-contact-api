import { z } from "zod";
import { loginSchema } from "../schemas";

export interface IToken {
  token: string;
}

export type TLogin = z.infer<typeof loginSchema>;
