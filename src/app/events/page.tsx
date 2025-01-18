import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, FileText, GraduationCap , FolderOpen} from "lucide-react";
import EventList from '../components/EventList';

export default function EventPage() {

    return (
        <Layout>
            <main className="bg-[#fffbed] min-h-screen">

                {/* Committe Section */}
                <section className="bg-[#fffbed] p-8 md:p-8">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center text-[#333] mb-20">Events</h2>
                        <EventList />
                    </div>
                </section>
            </main>
        </Layout>
    );
};

