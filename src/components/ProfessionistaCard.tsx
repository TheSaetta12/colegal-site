import Image from "next/image";
import { Link } from "@/navigation";

type ProfessionistaCardProps = {
  name: string;
  competenze: string;
  slug: string;
  cta?: string;
};

const imageMap: Record<string, string> = {
  "pietro-messina": "/images/avv-pietro-messina.jpg",
  "orsola-papasogli-tacca": "/images/avv-orsola-papasogli-tacca.jpg",
  "ascanio-ruschi": "/images/avv-ascanio-ruschi.jpg",
};

export default function ProfessionistaCard({ name, competenze, slug, cta = "Approfondisci" }: ProfessionistaCardProps) {
  const imgSrc = imageMap[slug];

  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="bg-[#353535] text-white px-6 py-8">
        <h3 className="text-base font-bold tracking-wide uppercase mb-4">
          {name}
        </h3>
        <div className="text-xs text-white/80 leading-relaxed">
          {competenze}
        </div>
        <div className="mt-6">
          <Link
            href={`/professionisti/${slug}`}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-accent hover:text-white transition"
          >
            {cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
