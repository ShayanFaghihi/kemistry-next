import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { userEmail } = body.values;

    const data = await resend.contacts.create({
      email: "steve.wozniak@gmail.com",
      firstName: "Steve",
      lastName: "Wozniak",
      unsubscribed: false,
      audienceId: "7d0ff667-7ea2-4266-a355-6374279c01eb",
    });
    if (data.status === "success") {
      console.log("success");
      return NextResponse.json({ message: "Contact added successfully" });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
