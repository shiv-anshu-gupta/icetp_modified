// src/components/EventList.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Briefcase, FileText, GraduationCap , FolderOpen} from "lucide-react";

interface Committe {
  id: number;
  name: string;
  default_image:string;
  url:string;
}

export default function CommitteList() {
  const [committe, setCommitte] = useState<Committe[]>([]);

  useEffect(() => {
    const fetchCommitte = async () => {
      const response = await fetch('/api/committe');
      const data = await response.json();
      setCommitte(data);
    };
    fetchCommitte();
  }, []);

  return (
    <div className='features-section'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {committe.map((committe) => (
              <div key={committe.id} className="bg-white shadow-md rounded-lg overflow-hidden border-2">
                  <div className="bg-white text-[#1b4332] p-6 rounded-lg">
                  <div className="mb-4">
                      <Image src={`/committe/${committe.default_image}`} alt={`${committe.url}`} width={64} height={64} />
                  </div>
                  <h2 className="text-xl font-semibold mb-4">{committe.name}</h2>
                  <a href="#" className="text-[#2d6a4f] flex items-center">
                      Know More
                      <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  </div>
              </div>
          ))}
        </div>
    </div>
  );
}