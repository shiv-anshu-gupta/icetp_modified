// src/models/eventModel.ts
import db from "../../../../config/database"; // Adjust the path based on your structure

const EventModel = {
  getAllEvents: async () => {
    const sql = `SELECT * FROM events`;

    try {
      // Execute the SQL query and get the result
      const [events]: any = await db.execute(sql);

      // If no events are found, log it
      if (events.length === 0) {
        console.warn("No events found in the database.");
      }

      return events;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw new Error("Failed to fetch events");
    }
  },
};

export default EventModel;
