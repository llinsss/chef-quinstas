import PageHero from "@/components/PageHero";
import { services } from "@/lib/content";
export const metadata = { title: "Expertise" };
export default function Services() {
  return (
    <>
      <PageHero
        kicker="Expertise"
        title="Every detail, considered."
        copy="Culinary creativity, hospitality leadership and practical systems developed around food, people, operations, service and business performance."
      />
      <section className="bg-[#f4efe7] py-20 text-[#111720]">
        <div className="container grid gap-px bg-black/10 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.num} className="bg-[#f4efe7] p-9 md:p-14">
              <span className="eyebrow">{s.num}</span>
              <h2 className="serif mt-6 text-4xl">{s.title}</h2>
              <p className="mt-6 max-w-md leading-7 text-black/55">{s.text}</p>
              <ul className="mt-8 space-y-3 text-sm text-black/65">
                <li>— Professional consultation</li>
                <li>— Operationally practical planning</li>
                <li>— Consistent standards and execution</li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
