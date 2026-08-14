import Image from "next/image";
import PageHero from "@/components/PageHero";
export const metadata = { title: "About" };
export default function About() {
  return (
    <>
      <PageHero
        kicker="The chef"
        title="Nigerian roots. Global perspective. Aviation precision."
        copy="Based in Abuja, Chef Quinstas brings together professional culinary training, food engineering and a deep respect for the way people experience food."
      />
      <section className="bg-[#f4efe7] py-24 text-[#151a22]">
        <div className="container grid gap-14 md:grid-cols-2">
          <div className="relative min-h-[680px]">
            <Image
              src="/assets/quinstas/portrait-close.jpg"
            alt="Portrait of Chef Quinstas, a Nigerian aviation chef based in Abuja"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="self-center md:px-10">
            <p className="eyebrow">Meet Quinstas</p>
            <h2 className="serif mt-5 text-5xl">
              Hospitality is the final ingredient.
            </h2>
            <div className="mt-8 space-y-5 leading-8 text-black/65">
              <p>
              Chef Quinstas is a Nigerian aviation chef and food
                engineer based in Abuja. She creates refined, deeply personal
                dining experiences for private aviation guests, combining
                meticulous preparation with an instinctive understanding of
                discreet service.
              </p>
              <p>
                A qualified chef and graduate of the prestigious Red Dish
                Chronicles culinary school in Abuja, her work is grounded in
                professional technique and strengthened by her food-engineering
                background.
              </p>
              <p>
                Her expertise spans recipe development, international cuisines
                and the rich diversity of Nigerian and local dishes. Every menu
                begins with the guest—their preferences, itinerary, occasion and
                sense of comfort—then considers flavour at altitude, timing,
                presentation and effortless cabin service.
              </p>
            </div>
            <div className="mt-12 grid gap-6 border-t border-black/15 pt-8 sm:grid-cols-3">
              <div>
                <b className="serif text-2xl">Abuja</b>
                <p className="mt-2 text-xs uppercase tracking-widest text-black/45">
                  Based in Nigeria
                </p>
              </div>
              <div>
                <b className="serif text-2xl">RDC</b>
                <p className="mt-2 text-xs uppercase tracking-widest text-black/45">
                  Culinary graduate
                </p>
              </div>
              <div>
                <b className="serif text-2xl">Food</b>
                <p className="mt-2 text-xs uppercase tracking-widest text-black/45">
                  Engineering expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
