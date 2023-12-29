import { getEvents } from "@/lib/events";
import Image from "next/image";

import classes from "./page.module.css";
import Hero from "@/components/hero/hero";

export default async function HomePage() {
  const events = await getEvents();

  return <Hero />;
}
