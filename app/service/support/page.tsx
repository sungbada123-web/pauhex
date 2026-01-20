'use client';

import { Mail, Phone, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="relative w-full h-[300px] mb-20 bg-[#179A97]">
                <Image
                    src="/images/service/header-abstract.png"
                    alt="Service Abstract"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-light text-white tracking-widest uppercase">Pauhex Service</h1>
                </div>
            </div>
            <div className="container max-w-4xl">
                <h1 className="text-4xl font-light text-[#003568] mb-12">Customer Support</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 border border-gray-100 rounded-sm hover:shadow-lg transition-shadow">
                        <Mail className="w-10 h-10 text-[#179A97] mb-4" />
                        <h3 className="font-bold text-[#2D3748] mb-2">Email Us</h3>
                        <p className="text-sm text-gray-500 mb-4">24/7 Response Time</p>
                        <a href="mailto:support@pauhex.com" className="text-[#003568] font-bold text-sm">support@pauhex.com</a>
                    </div>

                    <div className="p-8 border border-gray-100 rounded-sm hover:shadow-lg transition-shadow">
                        <Phone className="w-10 h-10 text-[#179A97] mb-4" />
                        <h3 className="font-bold text-[#2D3748] mb-2">Call Us</h3>
                        <p className="text-sm text-gray-500 mb-4">Mon-Fri, 9am - 6pm EST</p>
                        <a href="tel:+18005550123" className="text-[#003568] font-bold text-sm">+1 (800) 555-0123</a>
                    </div>

                    <div className="p-8 border border-gray-100 rounded-sm hover:shadow-lg transition-shadow">
                        <MessageSquare className="w-10 h-10 text-[#179A97] mb-4" />
                        <h3 className="font-bold text-[#2D3748] mb-2">Live Chat</h3>
                        <p className="text-sm text-gray-500 mb-4">Instant Support</p>
                        <button className="text-[#003568] font-bold text-sm">Start Chat</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
