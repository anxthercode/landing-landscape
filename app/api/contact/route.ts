import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/contact';
import { siteContact } from '@/lib/site-data';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

function buildTextBody(data: ReturnType<typeof contactFormSchema.parse>) {
  return [
    'New project enquiry',
    '',
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Budget: ${data.budget}`,
    '',
    'Project details:',
    data.message,
  ].join('\n');
}

function buildHtmlBody(data: ReturnType<typeof contactFormSchema.parse>) {
  return `
    <h2>New project enquiry</h2>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Budget:</strong> ${data.budget}</p>
    <p><strong>Project details:</strong></p>
    <p>${data.message.replace(/\n/g, '<br />')}</p>
  `;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: 'We could not read your request. Please try again.' },
      { status: 400 },
    );
  }

  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: 'Please review the highlighted fields and try again.',
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !from || !to) {
    return NextResponse.json(
      {
        message:
          'The contact form is temporarily unavailable. Please email us directly while we finish the final mail setup.',
        fallbackEmail: siteContact.email,
      },
      { status: 503 },
    );
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: parsed.data.email,
      subject: `New enquiry from ${parsed.data.firstName} ${parsed.data.lastName}`,
      text: buildTextBody(parsed.data),
      html: buildHtmlBody(parsed.data),
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    console.error('Contact form delivery failed', await response.text());

    return NextResponse.json(
      {
        message:
          'We could not send your enquiry just now. Please try again in a moment or email us directly.',
        fallbackEmail: siteContact.email,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message:
      'Thank you. Your enquiry has been sent and a member of our team will be in touch shortly.',
  });
}
