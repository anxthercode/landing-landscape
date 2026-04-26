import * as z from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(20, 'Please tell us a little more about your project'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
