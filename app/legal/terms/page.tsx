'use client';

import Image from 'next/image';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="relative w-full h-[300px] mb-20 bg-[#003366]">
                <Image
                    src="/images/legal/header-abstract.png"
                    alt="Legal Abstract"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-light text-white tracking-widest uppercase">Legal</h1>
                </div>
            </div>
            <div className="container max-w-4xl pt-10">
                <h1 className="text-4xl font-light text-[#003568] mb-8">Terms of Service</h1>
                <div className="prose prose-lg text-gray-600">
                    <p>Last Updated: January 16, 2026</p>
                    <p>Welcome to Pauhex Systems. By accessing our website and using our services, you agree to these Terms of Service.</p>

                    <h3>1. Use of Services</h3>
                    <p>Our products and services are designed for senior health monitoring and medication management. They are not intended to replace professional medical advice.</p>

                    <h3>2. Privacy</h3>
                    <p>Your privacy is paramount. Please review our Privacy Policy to understand how we handle your data.</p>

                    <h3>3. Disclaimer</h3>
                    <p>Pauhex Systems provides hardware and software "as is". While we strive for 100% accuracy, no system is infallible.</p>
                </div>
            </div>
        </div>
    );
}
