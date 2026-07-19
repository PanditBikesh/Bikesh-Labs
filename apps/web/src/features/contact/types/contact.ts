import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters."),

  email: z
    .email("Please enter a valid email address."),
  
  subject: z
    .string()
    .min(3, "Subject is required")
    .max(100, "Subject must be under 100 characters"),


  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must be under 500 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;