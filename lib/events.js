export async function getEvents() {
  try {
    const response = await fetch(
      "https://events-api.dice.fm/v1/events?filter[venues]=Kemistry",
      {
        headers: {
          "x-api-key": process.env.API_KEY,
        },
        "Content-Type": "application/json",
      }
    );

    if (!response.ok) {
      throw new Error("Error in getting events");
    }

    const events = await response.json();

    return events.data;
  } catch (error) {
    console.log(error.message);
  }
}
