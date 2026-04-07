import { Clock, Mail, Phone } from 'lucide-react';
import { siteContact } from '@/lib/site-data';

export default function UtilityBar() {
  return (
    <div className="hidden items-center justify-between bg-primary px-12 py-2 font-label text-[10px] uppercase tracking-widest text-on-primary md:flex">
      <div className="flex gap-6">
        <a href={`tel:${siteContact.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 transition-colors hover:text-tertiary-container">
          <Phone className="h-3 w-3" />
          <span>{siteContact.phone}</span>
        </a>
        <div className="flex items-center gap-2">
          <Clock className="h-3 w-3" />
          <span>Mon — Fri: 09:00 — 18:00</span>
        </div>
      </div>
      <a href={`mailto:${siteContact.email}`} className="flex items-center gap-2 transition-colors hover:text-tertiary-container">
        <Mail className="h-3 w-3" />
        <span>{siteContact.email}</span>
      </a>
    </div>
  );
}
