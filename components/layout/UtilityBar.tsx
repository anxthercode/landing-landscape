import { Phone, Clock, Instagram } from 'lucide-react';

export default function UtilityBar() {
  return (
    <div className="hidden md:flex bg-primary text-on-primary text-[10px] uppercase tracking-widest px-12 py-2 justify-between items-center font-label">
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <Phone className="w-3 h-3" />
          <span>+44 (0) 20 7946 0123</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3" />
          <span>Mon — Fri: 09:00 — 18:00</span>
        </div>
      </div>
      <div>
        <a href="#" className="flex items-center gap-2 hover:text-tertiary-container transition-colors">
          <Instagram className="w-3 h-3" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
}
