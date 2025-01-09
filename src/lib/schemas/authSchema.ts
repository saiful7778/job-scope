import * as z from "zod";

export const registerSchema = z.object({
  userName: z
    .string({ required_error: "Username is required" })
    .min(1, "Username is required")
    .max(80, "Username is too long"),
  email: z
    .string({ required_error: "Email address is required" })
    .email({ message: "Email address is required" })
    .max(80, "Email address is too long"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must not exceed 20 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number"),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email address is required" })
    .email({ message: "Email address is required" })
    .max(80, "Email address is too long"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must not exceed 20 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number"),
});
