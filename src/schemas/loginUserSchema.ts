import * as z from "zod";

export const loginUserSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Le champ doit être rempli" })
    .email("Email invalide"),

  password: z
    .string()
    .min(8, {
      message: "Le mot de passe doit comporter au moins 8 caractères.",
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

export default loginUserSchema;
