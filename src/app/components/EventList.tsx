// src/components/EventList.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  description: string;
  image:string;
}

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const truncateText = (text:string, charLimit:number) => {
    if (!text) return ""; // Handle empty or undefined text
    return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
  };
  

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {events.map((event) => (
          <div key={event.id} className="bg-beige-100 rounded-lg overflow-hidden shadow-md">
            <Image src={`/event/${event.image}`} alt={`Event ${event.image}`} className="event-image" width={400} height={200} />
            <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 event-title-height text-gray-600 overflow-hidden">
              {event.title}
            </h3>
            <p className="text-gray-600 mb-4 event-description-height">
              {truncateText(event.description, 130)}
            </p>
            <button className="bg-green-800 text-white px-6 py-2 font-semibold hover:bg-green-700 transition duration-300">Read More</button>
            </div>
        </div>
        ))}
    </div>
  );
}