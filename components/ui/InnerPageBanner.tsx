import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';

interface Props {
  label: string;
  title: string;
  imageSrc: string;
}

export default function InnerPageBanner({ label, title, imageSrc }: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-primary pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col items-center text-center">
      {/* Content — no glass backdrop, clean white text over dark overlay */}
      <div className="z-20 relative px-6 flex flex-col items-center">
        <SectionLabel className="mb-6 text-tertiary-fixed">
          {label}
        </SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl text-white max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
      </div>
      
      {/* Background image + strong gradient overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover"
          priority
        />
        {/* Multi-stop gradient for reliable text contrast on any photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/55 to-primary/35"></div>
      </div>

    </section>
  );
}
