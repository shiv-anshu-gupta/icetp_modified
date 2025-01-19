"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Define Membership interface directly in this file
interface Membership {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: string;
}

export default function MembershipList() {
  const [memberships, setMemberships] = useState<Membership[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        const response = await fetch("/api/membership");

        if (!response.ok) {
          throw new Error("Failed to fetch memberships");
        }

        const data: Membership[] = await response.json();
        setMemberships(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMemberships();
  }, []);

  if (loading) return <p>Loading memberships...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {memberships.map((membership) => (
        <div key={membership.id} className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src={`/${membership.id}.jpg`} // Use actual image paths
            width={300}
            height={200}
            alt={membership.name}
          />
          <h3 className="text-xl font-semibold mb-4 mt-4 text-[#3C3B3B]">
            {membership.name}
          </h3>
          <p className="text-3xl font-bold mb-4 text-[#163A24]">
            ₹{membership.price}
          </p>
          <h5 className="text-[#000000]">Includes:</h5>
          <ul style={{ paddingLeft: "0px" }}>
            <li className="text-[#545353]">{membership.description}</li>
          </ul>
          <button className="bg-green-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300 mt-20">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}
