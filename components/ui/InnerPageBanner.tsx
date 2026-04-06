import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import WaveTransition from '@/components/ui/WaveTransition';

interface Props {
  label: string;
  title: string;
  imageSrc: string;
}

export default function InnerPageBanner({ label, title, imageSrc }: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-surface pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center text-center">
      <div className="z-20 relative px-6 flex flex-col items-center mt-12 bg-surface/30 p-8 pt-12 backdrop-blur-md rounded-2xl mx-4">
        <SectionLabel className="mb-6">{label}</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl text-primary max-w-4xl mx-auto leading-tight drop-shadow-md">
          {title}
        </h1>
      </div>
      
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* TODO: replace with real image */}
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-surface/90 mix-blend-color"></div>
        <div className="absolute inset-0 bg-primary-container/25"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <WaveTransition fill="#fcf9f4" />
      </div>
    </section>
  );
}
