import Image from "next/image";

export default function PageHero({
  kicker,
  title,
  copy,
  image,
}: {
  kicker: string;
  title: string;
  copy: string;
  image?: string;
}) {
  return (
    <section className="grain relative overflow-hidden border-b border-white/10 pb-20 pt-40">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="scale-110 object-cover object-top blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080c12]/45 via-[#080c12]/55 to-[#0b1018]" />
        </>
      )}
      <div className="container relative">
        <p className="eyebrow">{kicker}</p>
        <h1 className="serif mt-6 max-w-4xl text-6xl leading-none md:text-8xl">
          {title}
        </h1>
        <p className="mt-8 max-w-xl leading-7 text-white/55">{copy}</p>
      </div>
    </section>
  );
}
