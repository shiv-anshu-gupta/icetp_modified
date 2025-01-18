import React from 'react';
import Layout from './components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, FileText, GraduationCap , FolderOpen} from "lucide-react";
import EventList from './components/EventList';
import MembershipList from './components/MembershipList';

export default function HomePage() {
    
    const committees = [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M7 11c.33-.44.67-.88 1-1.31a8 8 0 0 1 3.88-2.54A8.57 8.57 0 0 1 19 10v0a5.17 5.17 0 0 1-.07.82 4 4 0 0 1-.53 1.18" />
              <path d="M11 2a7.67 7.67 0 0 1 1.94 3" />
              <path d="M20.96 8.06A7.66 7.66 0 0 1 22 12" />
              <path d="M12 20.5c1.4.13 2.8.13 4.2 0 .82-.07 1.61-.2 2.4-.38" />
              <path d="M5 18a6.2 6.2 0 0 1 0-2 6.2 6.2 0 0 0 0-2" />
              <path d="M2 12a7.66 7.66 0 0 1 1-3.94" />
            </svg>
          ),
          title: "Agriculture and food processing",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <rect width="20" height="14" x="2" y="3" rx="2" />
              <line x1="2" x2="22" y1="7" y2="7" />
              <line x1="12" x2="12" y1="7" y2="17" />
              <path d="M2 11h4" />
              <path d="M2 15h4" />
              <path d="M18 11h4" />
              <path d="M18 15h4" />
            </svg>
          ),
          title: "Banking Finance and Economics",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="M9 12h6" />
              <path d="M12 9v6" />
            </svg>
          ),
          title: "Insurance and Hospitals",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          ),
          title: "Education and Skill Development",
        },
    ]
    return (
        <Layout>
        <main className="bg-beige-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-talent text-white py-16">
            <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Connecting Talent: Freelancers, Job Seekers, Employers</h1>
                <p className="mb-6">A platform where talent meets opportunity. Join our community and unlock your potential.</p>
                <button className="bg-yellow-400 text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">Get Started</button>
                </div>
                <div className="md:w-1/2">
                <Image src="/connecting-talent.png" alt="Connecting Talent" width={500} height={300} className="rounded-lg" />
                </div>
            </div>
            </div>
        </section>

        {/* Event */}
        <section>
            <div className="relative bg-event p-8 md:p-16 overflow-hidden bottom-shape-height">
                <div className="absolute bottom-0 left-0 w-1/3 ">
                    <Image alt="Bottom Shape" src="/bottom-shape.png" className='bottom-shape' width={120} height={100}/>
                </div>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <InfoCard
                    icon={<Image alt="events" src="/events.png" width={50} height={50}/>}
                    title="Events"
                    description="ICETP hosts a variety of events, including seminars, webinars, and workshops, specifically for its members. These events are exclusively accessible to only registered members."
                    />
                    <InfoCard
                    icon={<Image alt="projects" src="/projects.png" width={50} height={50}/>}
                    title="Latest Projects"
                    description="Engaging in live projects during training provides fresh graduates with invaluable real-world experience, bridging the gap between academic learning and professional expectations."
                    />
                    <InfoCard
                    icon={<Image alt="events" src="/internship.png" width={50} height={50}/>}
                    title="Internships"
                    description="Effective Internships During Graduation Lead to Higher Packages in Campus Jobs Internships play a pivotal role in shaping a graduate's career trajectory, especially when it comes to securing higher-paying campus placements."
                    />
                </div>
            </div>
            
        </section>

        {/* Projects */}
        <section className="padding-top-20 bg-white p-8 md:p-8">
            <div className='container mx-auto'>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 relative aspect-[4/3]">
                        <Image
                        src="/bg-projects.jpg"
                        alt="Person working on a laptop"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className="gap-2 flex flex-col">
                            <Image
                            src="/projects-green.png"
                            alt="Person working on a laptop"
                            width={40}
                            height={40}
                            />
                            <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
                        </div>
                        <p className="text-gray-600">
                        How Live Projects Prepare Fresh Graduates for Global Corporate Roles<br></br>
                        Engaging in live projects during training provides fresh graduates with invaluable real-
                        world experience, bridging the gap between academic learning and professional
                        expectations. Here’s how live projects help prepare graduates for corporate roles in a competitive global market:<br></br>
                        </p>
                        <a
                        href="#"
                        className="inline-flex items-center text-green-500 hover:text-green-600 transition-colors"
                        >
                        Know More
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Internship */}
        <section className="padding-top-20 bg-white p-8 md:p-8">
            <div className='container mx-auto'>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    
                    <div className="md:w-1/2 mb-8 md:mb-0 mcolumn1">
                        <div className="gap-2 flex flex-col">
                            <Image
                            src="/internship-green.png"
                            alt="Person working on a laptop"
                            width={40}
                            height={40}
                            />
                            <h2 className="text-3xl font-bold text-gray-800">Internship</h2>
                        </div>
                        <p className="text-gray-600">
                        Effective Internships During Graduation Lead to Higher Packages in Campus Jobs<br></br>
                        Internships play a pivotal role in shaping a graduate's career trajectory, especially when it comes to securing higher-paying campus placements.Here's how internships
                        contribute to better opportunities and compensation:<br></br>
                        Real-World Experience<br></br>
                        </p>
                        <a
                        href="#"
                        className="inline-flex items-center text-green-500 hover:text-green-600 transition-colors"
                        >
                        Know More
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 relative aspect-[4/3] mcolumn2">
                        <Image
                        src="/bg-internship.png"
                        alt="Person working on a laptop"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Training */}
        <section className="padding-top-20 padding-bottom-20 bg-white justify-center p-8 md:p-8">
            <div className='container mx-auto'>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 relative aspect-[4/3]">
                        <Image
                        src="/bg-training.jpg"
                        alt="Person working on a laptop"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className="gap-2 flex flex-col">
                            <Image
                            src="/projects-green.png"
                            alt="Person working on a laptop"
                            width={40}
                            height={40}
                            />
                            <h2 className="text-3xl font-bold text-gray-800">Training</h2>
                        </div>
                        <p className="text-gray-600">
                        Training in skill enhancement and understanding the products used in the industry plays a vital role in helping professional groups advance in their careers. Here’s how:<br></br>
                        <b>Increased Competency and Expertise</b><br></br>
                        Training provides updated knowledge about industry tools, processes, and trends.<br></br>
                        Enhances technical and soft skills, making professionals more competent and
                        adaptable.
                        </p>
                        <a
                        href="#"
                        className="inline-flex items-center text-green-500 hover:text-green-600 transition-colors"
                        >
                        Know More
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Get a Jobs Section */}
        <section className="bg-white p-8 md:p-8">
            <div className="container mx-auto ">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 mb-8 md:mb-0 mcolumn1">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Get a Jobs</h2>
                        <p className="text-gray-600 mb-6">
                        Get the Job You Deserve<br></br>

                        Your Future Starts Here<br></br>

                        Finding the right job can be challenging, but we’re here to make it easier. Whether you're just starting your career, switching fields, or seeking new opportunities, our platform is your partner in success.<br></br>

                        </p>
                        <Link href="#" className="text-green-800 font-semibold hover:underline">Browse Jobs →</Link>
                    </div>
                    <div className="w-full md:w-1/2 relative aspect-[4/3] mcolumn2">
                        <Image 
                            src="/get-job.png" 
                            alt="Get a Job" 
                            className="rounded-lg"
                            layout="fill"
                            objectFit="cover" 
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* How it works Section */}
        <section className="bg-green-800 text-white p-8 md:p-8">
            <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How it works</h2>
            <div className="flex flex-col md:flex-row justify-around items-center">
                {['Post a Job', 'Choose Freelancers', 'Pay Safely'].map((step, index) => (
                <div key={step} className="text-center mb-8 md:mb-0">
                    <div className="bg-yellow-400 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{step}</h3>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Membership Section */}
        <section className="bg-event p-8 md:p-8">
            <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center mb-20" style={{color:'#333333'}}>Membership</h2>
            <MembershipList />
            </div>
        </section>

        {/* Events Section */}
        <section className="bg-white p-8 md:p-8">
            <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center mb-20" style={{color:'#333333'}}>Events</h2>
                <EventList/>
            </div>
        </section>

        {/* Commitee section */}
        <section>
            <div className="bg-[#1b4332] text-white min-h-screen p-8">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Committe</h1>
                        </div>
                        <div className="flex-shrink-0">
                            <button className="bg-[#2d6a4f] text-white px-4 py-2 rounded-md flex items-center">
                                View All
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-12">
                    <div className="flex-grow" />
                    
                    </div>
                    <div className='features-section'>
                        <div className="feature-box bg-white">
                            <div className="bg-white text-[#1b4332] p-6 rounded-lg">
                            <div className="mb-4">
                                <Image src="/agri.jpg" width={64} height={64} alt=""/>
                            </div>
                            <h2 className="text-xl font-semibold mb-4">Agriculture and food processing</h2>
                            <a href="#" className="text-[#2d6a4f] flex items-center">
                                Know More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            </div>
                        </div>
                        <div className="feature-box bg-white">
                            <div className="bg-white text-[#1b4332] p-6 rounded-lg">
                            <div className="mb-4">
                                <Image src="/banking.jpg" width={64} height={64} alt=""/>
                            </div>
                            <h2 className="text-xl font-semibold mb-4">Banking Finance and Economics</h2>
                            <a href="#" className="text-[#2d6a4f] flex items-center">
                                Know More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            </div>
                        </div>
                        <div className="feature-box bg-white">
                            <div className="bg-white text-[#1b4332] p-6 rounded-lg">
                            <div className="mb-4">
                                <Image src="/insurance.jpg" width={64} height={64} alt=""/>
                            </div>
                            <h2 className="text-xl font-semibold mb-4">Insurance and Hospitals</h2>
                            <a href="#" className="text-[#2d6a4f] flex items-center">
                                Know More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            </div>
                        </div>
                        <div className="feature-box bg-white">
                            <div className="bg-white text-[#1b4332] p-6 rounded-lg">
                            <div className="mb-4">
                                <Image src="/education.jpg" width={64} height={64} alt=""/>
                            </div>
                            <h2 className="text-xl font-semibold mb-4">Education and Skill Development</h2>
                            <a href="#" className="text-[#2d6a4f] flex items-center">
                                Know More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-event p-8 md:p-8">
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row items-center gap-8'>
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-8 black">Subscribe to our newsletter</h2>
                        <p style={{color:'#333'}}>
                            Weekly breaking news, analysis and cutting edge advices on job searching.
                        </p>
                    </div>
                    <div className='md:w-1/2 mb-8 md:mb-0'>
                        <form className="max-w-md mx-auto">
                            <div className="flex">
                            <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none" />
                            <button type="submit" className="btn-subscribe">Sign Up</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </main>
    </Layout>
    );
};

function InfoCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
      <div className="flex flex-col text-center">
        <div className="mb-2 text-[#4a6741]">{icon}</div>
        <h2 className="text-2xl font-bold text-[#1e3329] mb-2 text-left">{title}</h2>
        <p className="text-[#5c5c5c] mb-2 text-left min-h-145">{description}</p>
        <a href="#" className="text-[#4caf50] font-semibold flex items-center hover:underline">
          Know More
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    )
  }
