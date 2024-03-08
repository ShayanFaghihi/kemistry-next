export async function getEvents() {
  try {
    const response = await fetch(
      "https://events-api.dice.fm/v1/events?filter[venues]=Kemistry",
      {
        headers: {
          "x-api-key": process.env.API_KEY,
        },
        "Content-Type": "application/json",
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error in getting events");
    }

    // Define the UTC time string
    const utcTimeString = "2024-06-21T03:00:00Z";

    // Create a new Date object using the UTC time string
    const utcDate = new Date(utcTimeString);

    // Get the local time zone offset in milliseconds
    const timeZoneOffset = utcDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds

    // Calculate the local time by subtracting the time zone offset
    const localTime = new Date(utcDate.getTime() - timeZoneOffset);

    // Format the local time in Eastern Time Zone (UTC-4 during daylight saving time)
    const easternTime = localTime.toLocaleString("en-US", {
      timeZone: "America/New_York",
    });

    const newData = {
      id: "customEvent",
      images: ["/clan-of-xymox.jpeg"],
      name: "Clan of Xymox",
      date: easternTime,
      url: "https://www.eventbrite.com/e/clan-of-xymox-x-odus-tour-wcurse-mackey-sine-fort-lauderdale-tickets-829025787447",
    };

    const events = await response.json();
    events.data.splice(-1, 0, newData);
    return events.data;
  } catch (error) {
    console.log(error.message);
  }
}
