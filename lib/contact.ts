import * as z from 'zod';

export const budgetOptions = [
  { value: '20-50', label: '€20k — €50k' },
  { value: '50-150', label: '€50k — €150k' },
  { value: '150+', label: '€150k+' },
] as const;

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
  email: z.string().trim().email('Enter a valid email address'),
  budget: z.string().trim().min(1, 'Please select a budget range'),
  message: z.string().trim().min(20, 'Please tell us a little more about your project'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
