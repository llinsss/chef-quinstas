import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="container grid gap-10 md:grid-cols-3">
        <div>
          <div className="serif text-xl tracking-[.14em]">
            CHEF QUINSTAS
          </div>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
            Nigerian culinary heritage and global technique, crafted for private
            aviation.
          </p>
        </div>
        <div className="text-sm text-white/55">
          <p className="eyebrow mb-4">Navigate</p>
          <div className="flex flex-col gap-2">
            <Link href="/gallery">Gallery</Link>
            <Link href="/services">Expertise</Link>
            <Link href="/contact">Inquire</Link>
          </div>
        </div>
        <div className="md:text-right">
          <p className="eyebrow mb-4">Abuja · Nigeria</p>
          <a href="mailto:chefquinstas@gmail.com" className="serif block text-lg">
            chefquinstas@gmail.com
          </a>
          <a href="tel:+2348024616021" className="mt-2 block text-sm text-white/55">
            +234 802 461 6021
          </a>
        </div>
      </div>
      <div className="container mt-14 flex justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-widest text-white/35">
        <span>© {new Date().getFullYear()} Chef Quinstas</span>
      </div>
    </footer>
  );
}
