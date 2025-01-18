import React from 'react';
import Layout from '../components/Layout';
import { Metadata } from 'next'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, FileText, GraduationCap , FolderOpen} from "lucide-react";
import type { AppProps } from 'next/app';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';


export const metadata: Metadata = {
    title: 'Founders | ICETP',
    description: 'Learn more about our company and team',
}


export default function FounderPage() {

    
    return (
        <Layout>
            <div className='bg-[#FFFBED]'>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">Founders</h1>

                    <section className="mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className=''>
                                <Image className="w-100" width={400} height={400} src="/Yeshwant_Maheshram.jpg" alt='Yeshwant Maheshram'/>
                            </div>
                            <div>
                                <p className='text-gray-700'>
                                Cultivation of mind should be the ultimate aim of human existence. What began in the backyard of Yeshwant's parental house in the 1980s laid the groundwork for revolutionary innovation in technology. From consumer electronics to personal computers, teaching to research and how we run the business using ERP, Yeshwant left his indelible print on how to cultivate the mind to become an entrepreneur and live with ups and downs of life that such a life offers. Based on more than a dozen business and innovation ideas, Yeshwant along with many of his acquaintances dedicated their valuable time to nurture LCMASS: a noble initiative to help mankind in the healthcare sector. He envisaged the transformation of healthcare services in India- specifically for the common men through the optimum usage of technological innovations and advancements.
                                </p>
                            
                                <p className='text-gray-700 mt-20'>
                                "An ideal society should be mobile, should be full of channels that convey a change to take place in its one or another part. In an ideal society, there should be many interests consciously communicated and shared for the collective"
                                </p>
                                <p className='text-gray-700 mt-20'>
                                He studied at Indian Institute of Science, Banglore and carried out research at IIT Delhi in machine learning and neural network. He is a board member of the alumni association at SGSITS. He is currently working on cloud computing, mobile tech and ERP/SAP consulting. Has worked in US, UK and various cities of India.
                                </p>
                            </div>
                        </div>
                    </section>

                    

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Achievements</h2>
                        <div className="flex flex-wrap gap-2">
                        <Badge className='text-gray-700'>50+ Global Clients</Badge>
                        <Badge className='text-gray-700'>100M+ Users Worldwide</Badge>
                        <Badge className='text-gray-700'>20+ Industry Awards</Badge>
                        <Badge className='text-gray-700'>5 International Offices</Badge>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

