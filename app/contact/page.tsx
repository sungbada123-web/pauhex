'use client';

import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-[1640px] mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-5xl font-medium text-[#003568] mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl text-[#707070] font-light leading-relaxed">
                        Have questions about our products or want to learn more about the PAUHEX Health Hub?
                        We look forward to hearing from you.
                    </p>
                </div>

                <div className="mb-20 relative w-full h-[400px] rounded-sm overflow-hidden shadow-lg border border-gray-100">
                    <Image
                        src="/images/contact/hq.png"
                        alt="Pauhex Global Headquarters"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#003366]/90 to-transparent p-8">
                        <p className="text-white font-light tracking-widest uppercase text-sm">Palo Alto • Hainan • Berlin</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <div className="bg-[#F9FBFD] p-10 rounded-sm shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-medium text-[#555555] mb-6">
                            Send a Message
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#555555] mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 border border-[#C3C3C3] focus:outline-none focus:ring-2 focus:ring-[#003568] transition-all rounded-sm"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#555555] mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 border border-[#C3C3C3] focus:outline-none focus:ring-2 focus:ring-[#003568] transition-all rounded-sm"
                                    placeholder="yourname@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-[#555555] mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 border border-[#C3C3C3] focus:outline-none focus:ring-2 focus:ring-[#003568] transition-all rounded-sm"
                                    placeholder="Consultation subject"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#555555] mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-4 py-3 border border-[#C3C3C3] focus:outline-none focus:ring-2 focus:ring-[#003568] transition-all resize-none rounded-sm"
                                    placeholder="Details of your inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-[#003568] text-white hover:bg-[#179A97] transition-colors font-medium rounded-sm uppercase tracking-widest text-sm"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-medium text-[#555555] mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#003568] flex items-center justify-center flex-shrink-0 text-white rounded-sm">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-[#555555] mb-1">Global Headquarters</h3>
                                        <p className="text-[#707070] font-light">
                                            PAUHEX Systems, Inc.<br />
                                            123 Innovation Way<br />
                                            Palo Alto, CA 94304<br />
                                            United States
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#179A97] flex items-center justify-center flex-shrink-0 text-white rounded-sm">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-[#555555] mb-1">Phone</h3>
                                        <p className="text-[#707070] font-light">
                                            +1 (650) 555-0198
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#003568] flex items-center justify-center flex-shrink-0 text-white rounded-sm">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-[#555555] mb-1">Email</h3>
                                        <p className="text-[#707070] font-light">
                                            contact@pauhex.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#F9FBFD] p-8 rounded-sm shadow-sm border border-gray-100 flex items-start gap-4">
                            <Clock className="w-6 h-6 text-[#179A97] mt-1" />
                            <div>
                                <h3 className="text-lg font-medium text-[#555555] mb-2">
                                    Business Hours
                                </h3>
                                <div className="space-y-1 text-[#707070] font-light">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                                    <p>Saturday - Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#003568] to-[#179A97] text-white p-8 rounded-sm shadow-lg">
                            <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5" /> Institutions & Partnerships
                            </h3>
                            <p className="font-light mb-4 opacity-90">
                                For healthcare institutions seeking clinical validation or technical collaboration,
                                please contact our dedicated support team:
                            </p>
                            <p className="font-bold border-b border-white/30 pb-2 inline-block">
                                medical@pauhex.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
