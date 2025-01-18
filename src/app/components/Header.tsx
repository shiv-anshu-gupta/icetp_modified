"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import from next/navigation

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  const pathname = usePathname(); // Get the current path

  // Function to check if a menu item is active
  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white text-[#163A24]">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-0">
        {/* Logo and Menu Toggle */}
        <div className="flex items-center md:space-x-2 lg:space-x-2 sm:space-xs-4 ">
          <button
            className="md:hidden text-[#163A24] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="w-16">
            <img src="logo.png" alt="Logo" className="w-full" />
          </div>
        </div>

        {/* Navigation Menu (Desktop View) */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Home
                </p>
              </Link>
            </li>
            <li className="relative">
              {/* About Menu with Dropdown */}
              <Link href="/about" className="relative group">
                <p
                  className={`flex items-center hover:text-gray-500 cursor-pointer ${
                    isActive("/about") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  About Us
                </p>
              </Link>
            </li>
            <li>
              <Link href="/committe">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/committe") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Committe
                </p>
              </Link>
            </li>
            <li>
              <Link href="/membership">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/membership") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Membership
                </p>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/projects") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Projects
                </p>
              </Link>
            </li>
            <li>
              <Link href="/training">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/training") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Training
                </p>
              </Link>
            </li>
            <li>
              <Link href="/internship">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/internship") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Internship
                </p>
              </Link>
            </li>
            <li>
              <Link href="/jobs">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/jobs") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Jobs
                </p>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/events") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Events
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/contact") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login and Signup Buttons */}
        <div className="flex space-x-4">
          <Link href="/login">
            <button className="py-2 px-4 rounded login">Login</button>
          </Link>
          <Link href="/register">
            <button className="py-2 px-4 rounded register">Register</button>
            </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-2/3 h-full bg-white border-r border-gray-200 shadow-lg transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <button
            className="self-end"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#163A24]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/about") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  About Us
                </p>
              </Link>
            </li>
            <li>
              <Link href="/committe">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/committe") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Committe
                </p>
              </Link>
            </li>
            <li>
              <Link href="/membership">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/membership") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Membership
                </p>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/projects") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Projects
                </p>
              </Link>
            </li>
            <li>
              <Link href="/training">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/training") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Training
                </p>
              </Link>
            </li>
            <li>
              <Link href="/internship">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/internship") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Internship
                </p>
              </Link>
            </li>
            <li>
              <Link href="/jobs">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/jobs") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Jobs
                </p>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/events") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Events
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p
                  className={`hover:text-gray-500 cursor-pointer ${
                    isActive("/contact") ? "text-gray-500 font-bold" : ""
                  }`}
                >
                  Contact
                </p>
              </Link>
            </li>
          </ul>
          {/* Mobile Login and Register buttons */}
          <div className="flex flex-col space-y-4">
            <Link href="/login">  
              <button className="py-2 px-4 rounded login">Login</button>
            </Link>
            <Link href="/register">
              <button className="py-2 px-4 rounded register">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
