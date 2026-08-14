import { NextResponse } from "next/server";
import { Resend } from "resend";
export async function POST(req: Request) {
  try {
    const b = await req.json();
    if (!b.name || !b.email || !b.message)
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 },
      );
    if (!process.env.RESEND_API_KEY) {
      console.info("Contact form demo submission", {
        ...b,
        message: String(b.message).slice(0, 500),
      });
      return NextResponse.json({ ok: true, demo: true });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Chef Quinstas <inquiries@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "chefquinstas@gmail.com",
      replyTo: b.email,
      subject: `Private inquiry from ${b.name}`,
      text: `Name: ${b.name}\nEmail: ${b.email}\nDate: ${b.date || "Not specified"}\nRoute: ${b.route || "Not specified"}\n\n${b.message}`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to send" }, { status: 500 });
  }
}
