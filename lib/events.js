export async function getEvents() {
  try {
    const response = await fetch(
      "https://events-api.dice.fm/v1/events?filter[venues]=Kemistry",
      {
        headers: {
          "x-api-key": "HEpHpEIoQc3ssGz6UFT8O2vgZSsATa2L14lfW5j6",
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

    const events = await response.json();

    return events.data;
  } catch (error) {
    console.log(error.message);
  }
}
