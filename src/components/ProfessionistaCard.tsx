import Image from "next/image";
import { Link } from "@/navigation";

type ProfessionistaCardProps = {
  name: string;
  competenze: string;
  slug: string;
};

const imageMap: Record<string, string> = {
  "pietro-messina": "/images/avv-pietro-messina.jpg",
  "orsola-papasogli-tacca": "/images/avv-orsola-papasogli-tacca.jpg",
  "ascanio-ruschi": "/images/avv-ascanio-ruschi.jpg",
};

export default function ProfessionistaCard({ name, competenze, slug }: ProfessionistaCardProps) {
  const imgSrc = imageMap[slug];

  return (
    <div className="text-center">
      <div className="relative w-full aspect-[3/4] overflow-hidden mb-5 group">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent h-1/2" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-4 text-left">
          <h3 className="text-white text-lg font-serif font-bold leading-tight">{name}</h3>
        </div>
      </div>
      <h3 className="text-lg font-serif font-bold text-heading mb-2">{name}</h3>
      <p className="text-xs text-body/70 leading-relaxed mb-4 px-2">{competenze}</p>
      <Link
        href={`/professionisti/${slug}`}
        className="inline-block text-xs font-semibold tracking-widest text-accent hover:text-accent-light transition uppercase"
      >
        Approfondisci
      </Link>
    </div>
  );
}
