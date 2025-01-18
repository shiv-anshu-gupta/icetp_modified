import React from 'react';
import Link from "next/link";
const Footer: React.FC = () => {
    return (
        <footer className="darkGreen text-white p-8 md:p-8">
            <div className="container mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* About Us Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-sm leading-relaxed">
                            ICE – International Consortium of Entrepreneurs shares a passionate belief in our community, and that passion has led many of us to seek a stronger voice in our community…a voice in our future!
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        About Us
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link href="/membership">
                                        Membership
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/committe">
                                        Committe
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contribute">
                                        Contribute
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                
                                <li>
                                    <Link href="/events">
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/training">
                                        Training
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Contact Us
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                
                                <li>
                                    <Link href="/login">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/register">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div>
                        Copyright © 2025 ICETP. All rights reserved.
                    </div>
                    <div className="mt-4 sm:mt-0 space-x-4">
                        <a href="#" className="hover:underline">Terms & Conditions</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
