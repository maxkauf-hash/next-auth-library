import * as z from "zod";

export const registerUserSchema = z.object({
  firstName: z.string().min(1, "Firstname is required"),
  lastName: z.string().min(1, "Lastname is required"),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Email invalide"),
  password: z
    .string()
    .min(8, {
      message: "Password should be at least 8 characters.",
    })
    .regex(/[a-z]/, {
      message: "Le mot de passe doit contenir au moins une lettre minuscule.",
    })
    .regex(/[A-Z]/, {
      message: "Le mot de passe doit contenir au moins une lettre majuscule.",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Le mot de passe doit contenir au moins un caractère spécial.",
    }),
});

export default registerUserSchema;
