import { EmailMessageTemplate } from "@/components/contact/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body.values;
    const data = await resend.emails.send({
      from: "Kemistry Night Club <info@kemistrynightclub.com>",
      to: ["info@kemistrynightclub.com"],
      reply_to: email,
      subject: "New Contact from the Kemistry Website",
      react: EmailMessageTemplate({ name, email, phone, message }),
    });

    if (data.status === "success") {
      console.log("success");
      return NextResponse.json({ message: "Email Successfully Sent!" });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
