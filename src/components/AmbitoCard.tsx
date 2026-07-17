import { Link } from "@/navigation";

type AmbitoCardProps = {
  title: string;
  href: string;
};

export default function AmbitoCard({ title, href }: AmbitoCardProps) {
  return (
    <Link
      href={href}
      className="block bg-[#111] text-white px-6 py-10 hover:bg-primary-light transition text-center"
    >
      <span className="text-sm font-semibold tracking-wide uppercase">{title}</span>
    </Link>
  );
}
