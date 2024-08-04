import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { userEmail, firstName, lastName } = body;

    // Make sure to pass the received values
    const data = await resend.contacts.create({
      email: userEmail,
      firstName: "firstName",
      lastName: "lastName",
      unsubscribed: false,
      audienceId: "7d0ff667-7ea2-4266-a355-6374279c01eb",
    });

    // Check the response and ensure it has the expected structure
    if (data && data.status === "success") {
      console.log("Contact added successfully");
      return NextResponse.json({ message: "Contact added successfully" });
    }

    // Handle other possible responses
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error adding contact:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}
