"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  ["About", "/about"],
  ["Gallery", "/gallery"],
  ["Expertise", "/services"],
  ["Inquire", "/contact"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1018]/75 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="serif text-xl tracking-[.14em]">
          CHEF QUINSTAS
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([n, h]) => (
            <Link
              key={h}
              href={h}
              className={`nav-link text-[11px] uppercase tracking-[.18em] transition ${pathname === h ? "nav-link-active text-[#c6a36b]" : "text-white/70 hover:text-white"}`}
            >
              {n}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle navigation"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#0b1018] px-5 py-6 md:hidden">
          {links.map(([n, h]) => (
            <Link
              onClick={() => setOpen(false)}
              className={`mobile-nav-link block py-4 serif text-3xl ${pathname === h ? "text-[#c6a36b]" : ""}`}
              key={h}
              href={h}
            >
              {n}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
