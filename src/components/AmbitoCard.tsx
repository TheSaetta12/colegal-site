import { Link } from "@/navigation";

type AmbitoCardProps = {
  title: string;
  href: string;
};

export default function AmbitoCard({ title, href }: AmbitoCardProps) {
  return (
    <Link
      href={href}
      className="block text-sm font-semibold tracking-wide uppercase text-heading hover:text-accent transition-colors py-2.5 border-b border-border/60 hover:border-accent"
    >
      {title}
    </Link>
  );
}
