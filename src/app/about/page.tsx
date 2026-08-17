import Image from "next/image";
import PageHero from "@/components/PageHero";
export const metadata = { title: "About" };
export default function About() {
  return (
    <>
      <PageHero
        kicker="The chef"
        title="Culinary excellence. Hospitality. Innovation. Leadership."
        copy="Based in Abuja, Chef Quinstas is an executive chef, culinary consultant, recipe developer and hospitality professional with a decade of practical culinary experience."
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
                Chef Quinstas is a Nigerian executive chef, culinary consultant,
                recipe developer, food engineer and hospitality professional.
                She brings over 10 years of practical culinary experience and
                six years of professional industry experience to every
                engagement.
              </p>
              <p>
                A Top Class alumna of Reddish Chronicles Culinary School&apos;s
                2019/2020 cohort, she is also HACCP certified. Her work combines
                professional technique and food-safety discipline with the
                operational insight of food engineering.
              </p>
              <p>
                Her experience spans private-jet catering, Nigerian, Continental
                and international cuisine, recipe and menu development,
                procurement, food costing, inventory, kitchen leadership, staff
                training and hospitality operations. She believes exceptional
                food requires exceptional systems behind it: create with
                passion, execute with discipline and serve with excellence. As
                Deputy Director of Membership for the Culinary Art Practitioners
                Association of Nigeria, she also contributes to professional
                development and industry collaboration.
              </p>
            </div>
            <div className="mt-12 grid gap-6 border-t border-black/15 pt-8 sm:grid-cols-3">
              <div>
                <b className="serif text-2xl">10+</b>
                <p className="mt-2 text-xs uppercase tracking-widest text-black/45">
                  Years of culinary practice
                </p>
              </div>
              <div>
                <b className="serif text-2xl">6</b>
                <p className="mt-2 text-xs uppercase tracking-widest text-black/45">
                  Years in the industry
                </p>
              </div>
              <div>
                <b className="serif text-2xl">CAPA</b>
                <p className="mt-2 text-xs uppercase tracking-widest text-black/45">
                  Deputy Director, Membership
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
