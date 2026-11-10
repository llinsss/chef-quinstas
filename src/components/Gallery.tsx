"use client";
import Image from "next/image";
import { useState } from "react";
import { Play, X } from "lucide-react";
import { portfolio, type PortfolioItem } from "@/lib/content";

// Editorial mosaic shapes, cycled across the grid (mobile uses a 6-col grid, desktop 12).
const SHAPES = [
  "col-span-6 row-span-2 md:col-span-7 md:row-span-2", // hero
  "col-span-6 row-span-1 md:col-span-5 md:row-span-1", // medium
  "col-span-6 row-span-2 md:col-span-5 md:row-span-2", // tall
  "col-span-6 row-span-1 md:col-span-7 md:row-span-1", // wide
  "col-span-3 row-span-1 md:col-span-4 md:row-span-1", // small
  "col-span-3 row-span-1 md:col-span-4 md:row-span-1", // small
  "col-span-6 row-span-1 md:col-span-4 md:row-span-1", // small, full-width on mobile
];

export default function Gallery({
  filterable = false,
  categories,
  captions = true,
}: {
  filterable?: boolean;
  categories?: string[];
  captions?: boolean;
}) {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<PortfolioItem | null>(null);
  const pool = categories
    ? portfolio.filter((x) => categories.includes(x.category))
    : portfolio;
  const cats = ["All", ...new Set(pool.map((x) => x.category))];
  const items = cat === "All" ? pool : pool.filter((x) => x.category === cat);

  let cycle = 0;
  const shapeFor = (x: PortfolioItem) => {
    if (x.wide) return SHAPES[0];
    return SHAPES[1 + (cycle++ % (SHAPES.length - 1))];
  };

  return (
    <>
      {filterable && (
        <div className="mb-10 flex flex-wrap gap-5">
          {cats.map((c) => (
            <button
              onClick={() => setCat(c)}
              key={c}
              className={`text-[11px] uppercase tracking-[.16em] ${cat === c ? "text-[#c6a36b]" : "text-white/45"}`}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="grid auto-rows-[150px] grid-cols-6 grid-flow-row-dense gap-4 md:auto-rows-[190px] md:grid-cols-12">
        {items.map((x) => (
          <button
            onClick={() => setActive(x)}
            key={x.title}
            className={`${shapeFor(x)} group relative overflow-hidden bg-[#101927] text-left`}
          >
            {x.image ? (
              <Image
                src={x.image}
                alt={x.title}
                fill
                sizes="(max-width:768px) 50vw, 60vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
            ) : (
              <video
                src={x.video}
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 transition group-hover:opacity-95" />
            {x.video && (
              <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-black/20 backdrop-blur">
                <Play size={16} fill="currentColor" />
              </span>
            )}
            {captions && (
              <div className="absolute bottom-0 p-6">
                <p className="eyebrow">{x.category}</p>
                <h3 className="serif mt-2 text-2xl">{x.title}</h3>
              </div>
            )}
          </button>
        ))}
      </div>
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] grid place-items-center bg-black/95 p-5"
          onClick={() => setActive(null)}
        >
          <button aria-label="Close" className="absolute right-6 top-6">
            <X />
          </button>
          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {active.image ? (
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-contain"
              />
            ) : (
              <video
                src={active.video}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
