import Image from "next/image";

type PageHeroProps = {
  image: string;
  alt: string;
  className?: string;
  children: React.ReactNode;
};

export default function PageHero({ image, alt, className = "", children }: PageHeroProps) {
  return (
    <section
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary text-cream flex items-center justify-center min-h-[50vh] ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={alt} fill className="object-cover scale-105 blur-[3px]" priority />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/70 via-primary/50 to-primary/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-primary/30 to-primary/60 pointer-events-none" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">{children}</div>
    </section>
  );
}
