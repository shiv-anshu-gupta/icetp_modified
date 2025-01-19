// src/app/api/events/route.ts

import { NextResponse } from "next/server";
import EventModel from "../model/EventsModel";

export async function GET() {
  try {
    const events = await EventModel.getAllEvents();
    return NextResponse.json(events); // Send the fetched data as JSON
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
