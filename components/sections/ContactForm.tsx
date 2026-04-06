"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import CTAButton from '@/components/ui/CTAButton';
import { CheckCircle2 } from 'lucide-react';

const schema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid email address'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Please tell us more about your project'),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-12 space-y-6"
      >
        <CheckCircle2 className="w-16 h-16 text-tertiary-container" />
        <h3 className="font-display text-3xl text-primary">Inquiry Received</h3>
        <p className="text-on-surface-variant">Thank you for your interest. A member of our design team will contact you shortly to arrange your consultation.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full text-left">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <input {...register('firstName')} className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary-container focus:ring-0 py-4 font-body placeholder:text-outline" placeholder="First Name" type="text" />
          {errors.firstName && <p className="text-error text-xs mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <input {...register('lastName')} className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary-container focus:ring-0 py-4 font-body placeholder:text-outline" placeholder="Last Name" type="text" />
          {errors.lastName && <p className="text-error text-xs mt-1">{errors.lastName.message}</p>}
        </div>
      </div>
      <div>
        <input {...register('email')} className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary-container focus:ring-0 py-4 font-body placeholder:text-outline" placeholder="Email Address" type="email" />
        {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <select {...register('budget')} className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary-container focus:ring-0 py-4 font-body text-on-surface-variant">
          <option value="">Select Budget Range</option>
          <option value="20-50">€20k — €50k</option>
          <option value="50-150">€50k — €150k</option>
          <option value="150+">€150k+</option>
        </select>
        {errors.budget && <p className="text-error text-xs mt-1">{errors.budget.message}</p>}
      </div>
      <div>
        <textarea {...register('message')} className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary-container focus:ring-0 py-4 font-body placeholder:text-outline" placeholder="Tell us about your outdoor space..." rows={4}></textarea>
        {errors.message && <p className="text-error text-xs mt-1">{errors.message.message}</p>}
      </div>
      <CTAButton type="submit" className="w-full justify-center border-none" variant="primary">Send Inquiry</CTAButton>
    </form>
  );
}
