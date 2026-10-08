import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message is too short'),
});

export type ContactInput = z.infer<typeof contactSchema>;
