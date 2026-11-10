import PageHero from "@/components/PageHero";
import { experience } from "@/lib/content";
export const metadata = { title: "Expertise" };
export default function Services() {
  return (
    <>
      <PageHero
        kicker="Expertise"
        title="Every detail, considered."
        copy="Culinary creativity, hospitality leadership and practical systems developed around food, people, operations, service and business performance."
        image="/assets/quinstas/portrait-crossed-arms-side.jpg"
      />

      <section className="bg-[#f4efe7] py-24 text-[#151a22]">
        <div className="container">
          <p className="eyebrow">01 — Culinary craft</p>
          <h2 className="serif mt-5 max-w-2xl text-4xl leading-tight md:text-5xl">
            Cuisine built for every table — and every altitude.
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <p className="leading-7 text-black/65">
              Her kitchen moves fluidly between Nigerian classics, Continental
              technique and internationally inspired plates, reshaped for
              fine dining rooms, private events and the particular demands of
              a private-jet galley. The same range covers breakfast and
              brunch service, salads and composed mains, and the pastry work
              that closes a menu properly.
            </p>
            <p className="leading-7 text-black/65">
              Recipe and menu development sit at the centre of that work.
              Every dish is considered for flavour, texture and presentation
              first, then tested against cost, portion size and production
              efficiency — because a recipe that only works once isn&apos;t
              a recipe worth keeping. The result is food that is repeatable,
              scalable and commercially practical, whether it&apos;s a single
              tasting menu or a costed programme for a growing kitchen.
            </p>
          </div>
          <p className="mt-10 text-xs uppercase tracking-widest text-black/40">
            Private-jet catering · Event catering · Fine dining · Breakfast &
            brunch · Sauces & condiments
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101927] py-24">
        <div className="container">
          <p className="eyebrow">02 — Kitchen & operations</p>
          <h2 className="serif mt-5 max-w-2xl text-4xl leading-tight text-white md:text-5xl">
            Systems behind the plate.
          </h2>
          <p className="mt-8 max-w-2xl leading-7 text-white/60">
            Consistency is a production problem long before it&apos;s a
            talent problem. Day to day, that means production planning and
            written procedures that hold up under pressure, procurement and
            inventory control that protects quality and margin at the same
            time, and food and menu costing that keeps a kitchen commercially
            honest. Waste control and quality checks run alongside food
            safety and hygiene standards that don&apos;t flex — and staff
            supervision and training are what turn all of it into habit
            rather than paperwork.
          </p>
        </div>
      </section>

      <section className="bg-[#f4efe7] py-24 text-[#151a22]">
        <div className="container">
          <p className="eyebrow">03 — Hospitality leadership</p>
          <h2 className="serif mt-5 max-w-2xl text-4xl leading-tight md:text-5xl">
            Where food meets the whole operation.
          </h2>
          <p className="mt-8 max-w-2xl leading-7 text-black/65">
            Her experience reaches past the kitchen door into the business of
            hospitality itself — coordinating restaurant, bar, housekeeping
            and laundry functions, managing guest experience and service
            standards, and reporting on the revenue and expense lines that
            keep an operation accountable rather than just busy.
          </p>
          <p className="serif mt-12 text-2xl leading-snug text-[#9c7b45] md:text-3xl">
            Food + People + Operations + Service + Financial responsibility.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101927] py-24">
        <div className="container">
          <p className="eyebrow">04 — Culinary consulting</p>
          <h2 className="serif mt-5 max-w-2xl text-4xl leading-tight text-white md:text-5xl">
            Practical help for real kitchens.
          </h2>
          <p className="mt-8 max-w-2xl leading-7 text-white/60">
            Consulting work focuses on what actually moves a kitchen forward:
            workflow and equipment planning, menu structuring and costing,
            procurement and stock systems, staff structure and daily
            procedure, and the quality and hygiene standards that hold
            everything else together. The brief is different every time —
            the goal is always a kitchen that produces better food more
            reliably, and understands why.
          </p>
        </div>
      </section>

      <section className="bg-[#f4efe7] py-24 text-[#151a22]">
        <div className="container">
          <p className="eyebrow">Selected experience</p>
          <div className="mt-10 divide-y divide-black/10">
            {experience.map((e) => (
              <div key={e.role} className="grid gap-3 py-10 md:grid-cols-[1.1fr_2fr]">
                <div>
                  <h3 className="serif text-2xl">{e.role}</h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-[#9c7b45]">
                    {e.context}
                  </p>
                </div>
                <p className="max-w-xl leading-7 text-black/60">{e.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 text-center">
        <div className="container">
          <p className="eyebrow justify-center">Why I do this</p>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-white/55">
            She&apos;s just as invested in the professionals coming up
            behind her — sharing culinary fundamentals, kitchen organisation
            and food-safety discipline with emerging teams, in the belief
            that a strong culinary industry needs practitioners willing to
            keep learning as much as leading.
          </p>
          <h2 className="serif mt-10 text-5xl leading-tight md:text-7xl">
            Learn. Teach.
            <br />
            Lead. Create.
          </h2>
        </div>
      </section>
    </>
  );
}
