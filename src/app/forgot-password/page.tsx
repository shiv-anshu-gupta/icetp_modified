'use client'

import { useState } from 'react';
import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, FileText, GraduationCap , FolderOpen , Mail, Lock} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Alert, AlertDescription } from '../components/ui/alert';

export default function ForgotPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitted(true)
        setIsSubmitting(false)
    }

    return (
        <Layout>
            <main className="bg-[#fffbed] min-h-screen">

                {/* Committe Section */}
                <section className="bg-[#fffbed] p-8 md:p-8">
                <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center py-8">
                    <div className="w-full max-w-md space-y-6">
                        <div className="text-center space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Forgot your password?
                        </h1>
                        <p className="text-gray-500 text-lg">
                            Don&apos;t worry! Enter your email and we&apos;ll send you a reset link.
                        </p>
                        </div>

                        {isSubmitted ? (
                        <Alert className="bg-[#90be6d]/10 border-[#90be6d] text-[#2d6a4f]">
                            <AlertDescription>
                            If an account exists with this email, you will receive password reset instructions.
                            </AlertDescription>
                        </Alert>
                        ) : (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="pl-10"
                                required
                            />
                            </div>

                            <Button 
                            type="submit" 
                            className="w-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white py-6 text-lg"
                            disabled={isSubmitting}
                            >
                            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                            </Button>

                            <div className="text-center">
                            <Link 
                                href="/login" 
                                className="text-[#2d6a4f] hover:underline font-medium"
                            >
                                Back to Login
                            </Link>
                            </div>
                        </form>
                        )}
                    </div>
                </div>
                </section>
            </main>
        </Layout>
    );
};

