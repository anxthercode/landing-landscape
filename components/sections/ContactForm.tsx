"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
import { budgetOptions, contactFormSchema, type ContactFormValues } from '@/lib/contact';
import { siteContact } from '@/lib/site-data';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

type ContactApiResponse = {
  message?: string;
  fallbackEmail?: string;
};

const fieldClasses =
  'w-full border-0 border-b border-outline-variant bg-transparent py-4 font-body text-on-background placeholder:text-outline focus:border-tertiary-container focus:outline-none';

export default function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [serverMessage, setServerMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmissionState('submitting');
    setServerMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json().catch(() => null)) as ContactApiResponse | null;

      if (!response.ok) {
        const fallbackText = result?.fallbackEmail
          ? ` You can also email us directly at ${result.fallbackEmail}.`
          : ` You can also email us directly at ${siteContact.email}.`;

        throw new Error((result?.message || 'We could not send your enquiry just now.') + fallbackText);
      }

      setSubmissionState('success');
      setServerMessage(
        result?.message ||
          'Thank you. Your enquiry has been sent and a member of our team will be in touch shortly.',
      );
      reset();
    } catch (error) {
      setSubmissionState('error');
      setServerMessage(
        error instanceof Error
          ? error.message
          : `We could not send your enquiry just now. Please email us directly at ${siteContact.email}.`,
      );
    }
  };

  if (submissionState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center space-y-6 py-12 text-center"
      >
        <CheckCircle2 className="h-16 w-16 text-tertiary-container" />
        <h3 className="font-display text-3xl text-primary">Inquiry sent</h3>
        <p className="max-w-xl text-on-surface-variant">{serverMessage}</p>
        <CTAButton type="button" variant="ghost" onClick={() => setSubmissionState('idle')}>
          Send another enquiry
        </CTAButton>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6 text-left" noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block font-label text-[11px] uppercase tracking-[0.14em] text-primary-fixed-dim">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="First name"
            className={fieldClasses}
            aria-invalid={Boolean(errors.firstName)}
            {...register('firstName')}
          />
          {errors.firstName && <p className="mt-2 text-xs text-error">{errors.firstName.message}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="mb-2 block font-label text-[11px] uppercase tracking-[0.14em] text-primary-fixed-dim">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Last name"
            className={fieldClasses}
            aria-invalid={Boolean(errors.lastName)}
            {...register('lastName')}
          />
          {errors.lastName && <p className="mt-2 text-xs text-error">{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-label text-[11px] uppercase tracking-[0.14em] text-primary-fixed-dim">
          Email address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={fieldClasses}
          aria-invalid={Boolean(errors.email)}
          {...register('email')}
        />
        {errors.email && <p className="mt-2 text-xs text-error">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block font-label text-[11px] uppercase tracking-[0.14em] text-primary-fixed-dim">
          Budget range
        </label>
        <select
          id="budget"
          className={`${fieldClasses} text-on-surface-variant`}
          aria-invalid={Boolean(errors.budget)}
          {...register('budget')}
        >
          <option value="">Select budget range</option>
          {budgetOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.budget && <p className="mt-2 text-xs text-error">{errors.budget.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-label text-[11px] uppercase tracking-[0.14em] text-primary-fixed-dim">
          Project details
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your site, goals, timeline, and anything already in place."
          className={fieldClasses}
          aria-invalid={Boolean(errors.message)}
          {...register('message')}
        />
        {errors.message && <p className="mt-2 text-xs text-error">{errors.message.message}</p>}
      </div>

      {submissionState === 'error' && (
        <div className="flex items-start gap-3 rounded-xl border border-error/20 bg-error/5 p-4 text-sm text-on-surface-variant" aria-live="polite">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-error" />
          <p>{serverMessage}</p>
        </div>
      )}

      <CTAButton
        type="submit"
        className="w-full justify-center border-none"
        variant="primary"
        disabled={submissionState === 'submitting'}
      >
        {submissionState === 'submitting' ? 'Sending enquiry' : 'Send enquiry'}
      </CTAButton>
    </form>
  );
}
