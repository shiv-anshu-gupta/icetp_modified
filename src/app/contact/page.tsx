"use client";
import React from 'react';
import Layout from '../components/Layout';
import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
//import Map from '../components/Map';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, FileText, GraduationCap , FolderOpen} from "lucide-react";
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function ContactPage() {
    return (
        <Layout>
            <div className='bg-[#FFFBED]'>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">Contact Us</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <div className="space-y-4">
                            <p className="flex items-center text-gray-700">
                            <Mail className="mr-2 text-gray-700" /> info@icetp.com
                            </p>
                            <p className="flex items-center text-gray-700">
                            <Phone className="mr-2 text-gray-700" /> +91 6264962799
                            </p>
                            <p className="flex items-center text-gray-700">
                            <MapPin className="mr-2 text-gray-700" /> Office No. 306, 3rd Floor , Apollo Trade Center , Geeta Bhawan Square , Indore, Madhya Pradesh 452001
                            </p>
                        </div>
                        <div className="mt-8">
                            <ContactForm />
                        </div>
                        </div>
                        <div>
                         <Map />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

