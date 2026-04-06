import WaveTransition from '@/components/ui/WaveTransition';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <WaveTransition fill="#1c3a2f" className="translate-y-[1px] text-primary-container" />
      <div className="bg-primary-container text-surface">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-12 pt-16 pb-12 max-w-screen-2xl mx-auto">
          {/* Column 1 */}
          <div>
            <div className="font-display text-3xl mb-8">Studio Aethel</div>
            <p className="text-primary-fixed-dim text-sm max-w-xs leading-relaxed mb-8">
              Crafting enduring landscapes that celebrate the dialogue between architecture and nature.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-surface/30 flex items-center justify-center hover:bg-tertiary-container transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-surface/30 flex items-center justify-center hover:bg-tertiary-container transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-label uppercase tracking-[0.15rem] text-[10px] text-tertiary-container mb-8">Navigation</h4>
              <ul className="space-y-4">
                <li><Link href="/philosophy" className="text-surface/70 hover:text-surface transition-colors hover:translate-x-1 inline-block">Philosophy</Link></li>
                <li><Link href="/projects" className="text-surface/70 hover:text-surface transition-colors hover:translate-x-1 inline-block">Projects</Link></li>
                <li><Link href="/journal" className="text-surface/70 hover:text-surface transition-colors hover:translate-x-1 inline-block">Journal</Link></li>
                <li><Link href="/careers" className="text-surface/70 hover:text-surface transition-colors hover:translate-x-1 inline-block">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label uppercase tracking-[0.15rem] text-[10px] text-tertiary-container mb-8">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="/privacy" className="text-surface/70 hover:text-surface transition-colors hover:translate-x-1 inline-block">Privacy</Link></li>
                <li><Link href="/terms" className="text-surface/70 hover:text-surface transition-colors hover:translate-x-1 inline-block">Terms</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-label uppercase tracking-[0.15rem] text-[10px] text-tertiary-container mb-8">Contact</h4>
            <p className="text-surface/70 text-sm mb-6">studio@aethel.com<br />+44 (0) 20 7946 0123</p>
            <p className="text-surface/70 text-sm">12 Architecture Mews<br />Kensington, London W8 5TF</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface/10 py-12 px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-label text-[10px] uppercase tracking-[0.15rem] text-tertiary-container">© 2024 Studio Aethel Landscape Architecture.</span>
          <div className="flex gap-8">
            <a href="#" className="font-label text-[10px] uppercase tracking-[0.15rem] text-surface/50 hover:text-tertiary-container transition-colors">Instagram</a>
            <a href="#" className="font-label text-[10px] uppercase tracking-[0.15rem] text-surface/50 hover:text-tertiary-container transition-colors">LinkedIn</a>
            <a href="#" className="font-label text-[10px] uppercase tracking-[0.15rem] text-surface/50 hover:text-tertiary-container transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
