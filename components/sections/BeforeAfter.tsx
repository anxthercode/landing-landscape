import Image from 'next/image';

export default function BeforeAfter() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden h-[600px] relative">
        <div className="relative group">
          <Image 
            src="/images/before-transformation.jpg" 
            alt="neglected overgrown garden with patchy grass and broken fence" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-white bg-black/40 px-6 py-3 backdrop-blur-sm rounded-full">
              Before
            </span>
          </div>
        </div>
        <div className="relative group">
          <Image 
            src="/images/after-transformation.jpg" 
            alt="stunning modern transformation of the same garden with limestone paving and lush borders" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-white bg-tertiary px-6 py-3 shadow-xl rounded-full">
              After
            </span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center w-full z-10 pointer-events-none">
          <h2 className="text-white font-display text-2xl drop-shadow-lg">
            What a Transformation Looks Like
          </h2>
        </div>
      </div>
    </section>
  );
}
