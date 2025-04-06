import NavBarProps from "@/interfaces";
import Link from "next/link";

export function NavBar(props: NavBarProps) {
  const { active } = props;
  const activeClass = "border-b-4 border-pink-600";

  const links = [
    { label: "dashboard", href: "/dashboard" },
    { label: "transactions", href: "/transactions" },
    { label: "categories", href: "/categories" },
  ];

  return (
    <nav className="flex justify-between items-center bg-slate-900 p-6">
      <h1 className="text-2xl font-bold">Finance Walk</h1>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li
            key={link.label}
            className={active === link.label ? activeClass : ""}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <img
        className="size-12 rounded-full"
        src="http://github.com/felipeclarindo.png"
        alt="GitHub Avatar"
      />
    </nav>
  );
}
