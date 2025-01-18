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
    title: 'About Us | ICETP',
    description: 'Learn more about our company and team',
  }
  
  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Jane Smith', role: 'CTO', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Mike Johnson', role: 'Lead Designer', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Sarah Brown', role: 'Marketing Director', image: '/placeholder.svg?height=300&width=300' },
  ]
  
  const coreValues = [
    { 
        title: 'Leadership', 
        icon:'flaticon-charity-shelter',
        description: 'We strive to provide strong leadership to our organization and community by holding ourselves accountable to our mission and vision, leading by example, respecting those we meet and with whom we conduct business, upholding professional character, and delivering effective change.' 
    },
    { 
        title: 'Friendship', 
        icon:'flaticon-charity-world-in-your-hands',
        description: 'We are a place where young professionals can meet, network, partner, and unite. We help individuals build and sustain friendships as well as generate new business partnerships through our networking activities.' 
    },
    { 
        title: 'Diversity', 
        icon:'flaticon-charity-world-in-your-hands',
        description: 'We embrace diversity by providing an organization where each participant (members, sponsors, and others in the community) is appreciated, supported, and recognized based on the person’s own merit, accomplishments, and involvement in the organization.' 
    },
    { 
        title: 'Service', 
        icon:'flaticon-charity-shaking-hands-inside-a-heart',
        description: 'We strive to provide strong leadership to our organization and community by holding ourselves accountable to our mission and vision, leading by example, respecting those we meet and with whom we conduct business, upholding professional character, and delivering effective change.' 
    },
    { 
        title: 'Development', 
        icon:'flaticon-charity-alms',
        description: 'We are a place where young professionals can meet, network, partner, and unite. We help individuals build and sustain friendships as well as generate new business partnerships through our networking activities.' 
    },
  ]

export default function AboutPage() {

    
    return (
        <Layout>
            <div className='bg-[#FFFBED]'>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">About Us</h1>
                    
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Story</h2>
                        <p className="text-lg mb-4 text-gray-700">
                            ICE – International Consortium of Entrepreneurs shares a passionate belief in our community, and that passion has led many of us to seek a stronger voice in our community…a voice in our future!
                        </p>
                        <p className="text-lg mb-4 text-gray-700">
                            ICE is a group of diverse young professionals working together to showcase that India as a spectacular place to live, work, and play. Motivated by a desire to promote positive change in our community, ICE provides its members with valuable opportunities to build relationships with community and business leaders and to participate in the political, economic, and cultural development and direction of our city.
                        </p>
                        <p className="text-lg mb-4 text-gray-700">
                        Formed by a volunteer board of directors, ICE has grown enormously and now gives young professionals a powerful voice for affecting change in the sub-continent. ICE encourage them to get actively involved. Although we do provide many networking opportunities, we are not simply a group for socializing. ICE is passionate about making a difference! Our members care deeply about the community, and through its many volunteer hours, ICE has supported numerous local causes and worthy charities.
                        </p>
                        <p className="text-lg mb-4 text-gray-700">
                        ICE also works hard to educate its members concerning technology, political and economic topics affecting our area, so that young professionals can speak confidently about our city’s present and future goals. ICE also offers plenty of opportunities for our members to engage in professional development and to achieve positions of leadership within the organization and the community as a whole; we take very seriously our responsibility to cultivate our city’s future leaders.
                        </p>
                        <p className="text-lg mb-4 text-gray-700">
                        Whether it be raising money for a good cause, organizing an technical, economic or political forum, helping others grow professionally, or taking a leadership role to drive our community forward, ICE provides young people with the opportunities and support to make our dreams of a better community come true. We hope that you can join us! To become a member of ICE the organizations of choice for young leaders in our community, visit our membership page.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {coreValues.map((value) => (
                            <Card key={value.title}>
                            <CardContent className="p-4">
                                <div className={value.icon} ></div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-700">{value.title}</h3>
                                <p className="text-gray-600 text-gray-700">{value.description}</p>
                            </CardContent>
                            </Card>
                        ))}
                        </div>
                    </section>

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

