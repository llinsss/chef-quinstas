import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import Gallery from "@/components/Gallery";
import { services } from "@/lib/content";
export default function Home() {
  return (
    <>
      <section className="grain relative min-h-screen overflow-hidden bg-[#e8e9eb]">
        <Image
          src="/assets/quinstas/portrait-editorial.jpg"
          alt="Chef Quinstas, Nigerian aviation chef and food engineer in Abuja"
          fill
          priority
          className="object-cover object-[52%_22%] sm:object-[55%_24%] md:object-[58%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c12] via-[#080c12]/80 to-transparent" />
        <div className="container relative flex min-h-screen items-end pb-20 pt-36 md:items-center md:pb-0">
          <div className="max-w-3xl reveal">
            <div className="mb-7 flex items-center gap-4">
              <div className="goldline" />
              <p className="eyebrow">Aviation chef · Abuja</p>
            </div>
            <h1 className="serif text-6xl leading-[.95] md:text-[106px]">
              Dining,
              <br />
              <i className="font-normal text-[#d8bd92]">elevated.</i>
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-white/70">
              Private aviation cuisine shaped by Nigerian heritage,
              international technique and the precision of food engineering.
            </p>
            <Link href="/portfolio" className="btn mt-9">
              Discover her work <ArrowDownRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#f4efe7] py-28 text-[#131820]">
        <div className="container grid gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Chef · Food engineer · Creator</p>
            <h2 className="serif mt-6 text-5xl leading-tight md:text-7xl">
              Cuisine without
              <br />
              compromise.
            </h2>
          </div>
          <div className="max-w-lg self-end">
            <p className="serif text-2xl leading-9 text-[#2c3138]">
              Chef Quinstas brings culinary craft and scientific precision to
              the unique rhythm of private aviation—from original recipe
              development to Nigerian and international menus.
            </p>
            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 text-xs uppercase tracking-widest"
            >
              Discover her story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-28">
        <div className="container">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">The real story</p>
              <h2 className="serif mt-4 text-5xl">Chef Quinstas</h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden text-xs uppercase tracking-widest md:block"
            >
              View all media →
            </Link>
          </div>
          <Gallery />
        </div>
      </section>
      <section className="border-y border-white/10 bg-[#101927] py-28">
        <div className="container">
          <p className="eyebrow">Expertise</p>
          <div className="mt-12 divide-y divide-white/10">
            {services.slice(0, 4).map((s) => (
              <div
                key={s.num}
                className="grid gap-4 py-8 md:grid-cols-[80px_1fr_1fr]"
              >
                <span className="text-xs text-[#c6a36b]">{s.num}</span>
                <h3 className="serif text-3xl">{s.title}</h3>
                <p className="max-w-md text-sm leading-7 text-white/55">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#c6a36b] py-24 text-[#10141a]">
        <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[.2em]">
              Available for private aviation inquiries
            </p>
            <h2 className="serif mt-5 max-w-3xl text-5xl md:text-7xl">
              Where are we flying next?
            </h2>
          </div>
          <Link href="/contact" className="btn border-black/30">
            Begin an inquiry <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
