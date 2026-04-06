"use client";

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const defaultFaqs = [
  { q: "How involved do I need to be?", a: "We offer a turn-key service, but we welcome as much collaboration as you desire during the concept phase." },
  { q: "Do you provide lighting designs?", a: "Yes, architectural lighting is an integral part of our masterplans to ensure the garden is a 24-hour space." },
  { q: "What is the average project timeline?", a: "Typically 6-12 months from first meeting to completed installation, depending on complexity." },
  { q: "Do you offer pool design?", a: "Yes, we specialize in architectural pool integration that feels like a natural extension of the landscape." }
];

export default function FAQAccordion({ faqs = defaultFaqs }: { faqs?: { q: string, a: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-0 text-left w-full">
      {faqs.map((faq, i) => (
        <Accordion.Item key={i} value={`item-${i}`} className="border-b border-primary-container/20 last:border-0 py-2">
          <Accordion.Header>
            <Accordion.Trigger className="flex justify-between items-center w-full py-6 font-headline font-bold text-primary group text-left outline-none cursor-pointer">
              <span>{faq.q}</span>
              <ChevronDown className="w-5 h-5 text-tertiary-container transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0 ml-4" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="pb-6 text-sm text-on-surface-variant leading-relaxed pr-8">{faq.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
