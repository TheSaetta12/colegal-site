import { Link } from "@/navigation";

type AmbitoCardProps = {
  title: string;
  href: string;
  light?: boolean;
};

export default function AmbitoCard({ title, href, light }: AmbitoCardProps) {
  return (
    <Link
      href={href}
      className={`block text-sm font-semibold tracking-wide uppercase transition-colors py-2.5 border-b ${
        light
          ? "text-white/80 hover:text-white border-white/20 hover:border-white"
          : "text-heading hover:text-accent border-border/60 hover:border-accent"
      }`}
    >
      {title}
    </Link>
  );
}
