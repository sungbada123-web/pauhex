'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Search, MessageSquare, Phone, ArrowRight } from 'lucide-react';

export default function HelpCenter() {
    return (
        <div className="min-h-screen bg-white">
            <section className="pt-32 pb-24 bg-[#003366] text-white">
                <div className="container text-center max-w-3xl">
                    <HelpCircle className="w-16 h-16 text-[#179A97] mx-auto mb-8" />
                    <h1 className="text-4xl lg:text-5xl font-light mb-8">How can we <span className="font-semibold text-[#179A97]">help?</span></h1>
                    <div className="relative max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search for articles, guides..."
                            className="w-full bg-white/10 border border-white/20 px-6 py-4 rounded-sm text-white placeholder-white/40 focus:outline-none focus:border-[#179A97] transition-colors"
                        />
                        <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40" />
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-2xl font-semibold text-[#003366] mb-8">Featured Articles</h2>
                            <div className="space-y-6">
                                {[
                                    "Setting up your Pro-Dispense for the first time",
                                    "Connecting Vital-Radar to your home network",
                                    "Understanding your Health Hub data insights",
                                    "Best practices for multi-resident deployments"
                                ].map((q, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100 group cursor-pointer hover:border-[#179A97] transition-all">
                                        <span className="text-gray-600 font-light group-hover:text-[#003366] group-hover:font-normal transition-all">{q}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#179A97]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm">
                                <MessageSquare className="w-8 h-8 text-[#179A97] mb-6" />
                                <h3 className="font-bold text-[#003366] mb-2 uppercase tracking-widest text-xs">Live Chat</h3>
                                <p className="text-sm text-gray-500 font-light mb-6">Talk to our experts in real-time.</p>
                                <button className="text-sm font-bold text-[#179A97] hover:underline">Start Chat</button>
                            </div>
                            <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm">
                                <Phone className="w-8 h-8 text-[#179A97] mb-6" />
                                <h3 className="font-bold text-[#003366] mb-2 uppercase tracking-widest text-xs">Call Support</h3>
                                <p className="text-sm text-gray-500 font-light mb-6">Available Mon-Fri, 9am-6pm.</p>
                                <button className="text-sm font-bold text-[#179A97] hover:underline">+86 Hainan-Line</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
