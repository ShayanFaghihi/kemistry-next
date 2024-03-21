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

    const newData = {
      id: "customEvent",
      images: ["/clan-of-xymox.jpeg"],
      name: "Clan of Xymox",
      date: "2024-06-21T01:00:00Z",
      url: "https://www.eventbrite.com/e/clan-of-xymox-x-odus-tour-wcurse-mackey-sine-fort-lauderdale-tickets-829025787447",
    };

    const events = await response.json();
    events.data.splice(-2, 0, newData);
    return events.data;
  } catch (error) {
    console.log(error.message);
  }
}
