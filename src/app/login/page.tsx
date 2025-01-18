'use client'

import { useState } from 'react';
import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, FileText, GraduationCap , FolderOpen , Mail, Lock} from "lucide-react";
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <Layout>
            <main className="bg-[#fffbed] min-h-screen">

                {/* Committe Section */}
                <section className="bg-[#fffbed] p-8 md:p-8">
                    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center py-8">
                    <div className="w-full max-w-md space-y-6">
                        <div className="text-center space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            We&apos;re glad to see you again!
                        </h1>
                        <p className="text-gray-500 text-lg">
                            Don&apos;t have an account?{' '}
                            <Link href="/register" className="text-[#2d6a4f] hover:underline font-medium">
                            Sign Up!
                            </Link>
                        </p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <Input
                            type="email"
                            placeholder="admin@gmail.com"
                            className="pl-10"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••••"
                            className="pl-10"
                            />
                            <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center"
                            onClick={() => setShowPassword(!showPassword)}
                            >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            )}
                            </button>
                        </div>

                        <div className="flex items-center justify-end">
                            <Link 
                            href="/forgot-password" 
                            className="text-[#2d6a4f] hover:underline font-medium"
                            >
                            Forgot Password?
                            </Link>
                        </div>

                        <Button 
                            type="submit" 
                            className="w-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white py-6 text-lg"
                        >
                            Log In
                        </Button>
                        </form>
                    </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

