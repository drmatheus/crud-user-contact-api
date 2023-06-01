import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let currentType: string;

export const newContactSchema = z.object({
  type: z.enum(["email", "phone"]).refine((data) => {
    currentType = data;
    return true;
  }),
  contact: z
    .string()
    .refine(
      (data: string) => {
        if (currentType === "email") {
          return data.length <= 32;
        }
        return true;
      },
      {
        path: ["contact"],
        message: "Invalid contact. For 'email' type, the maximum length is 32.",
      }
    )
    .refine(
      (data: string) => {
        if (currentType === "email") {
          return emailRegex.test(data);
        }
        return true;
      },
      {
        path: ["contact"],
        message:
          "Invalid email format. Please enter a valid email address in the format 'example@mail.com'.",
      }
    )
    .refine(
      (data: string) => {
        if (currentType === "phone") {
          return data.length === 11;
        }
        return true;
      },
      {
        path: ["contact"],
        message:
          "Invalid contact. For 'phone' type, the length must be exactly 11.",
      }
    ),
});
