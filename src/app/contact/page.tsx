import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
export const metadata = { title: "Inquire" };
export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Private inquiries"
        title="Tell me where the journey begins."
        copy="Share a few details about your flight or occasion. Every inquiry is handled personally and discreetly."
      />
      <section className="bg-[#f4efe7] py-20 text-[#111720]">
        <div className="container grid gap-14 md:grid-cols-[1fr_2fr]">
          <aside>
            <p className="eyebrow">Direct contact</p>
            <a
              className="serif mt-5 block text-2xl"
              href="mailto:chefquinstas@gmail.com"
            >
              chefquinstas@gmail.com
            </a>
            <a className="serif mt-3 block text-2xl" href="tel:+2348024616021">
              +234 802 461 6021
            </a>
            <p className="mt-8 text-sm font-medium">Abuja, Nigeria</p>
            <p className="mt-3 text-sm leading-6 text-black/45">
              Available for private aviation engagements, subject to itinerary
              and schedule.
            </p>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
