'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/about" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to About
                    </Link>

                    <div className="mb-24">
                        <h1 className="text-6xl font-light text-[#003568] mb-8">Upcoming <span className="font-semibold text-[#179A97]">Events</span></h1>
                        <p className="text-xl text-[#555555] font-light max-w-2xl leading-relaxed">
                            Join us at medical congresses, tech summits, and exclusive brand experiences worldwide.
                        </p>
                    </div>

                    <div className="space-y-8 mb-32">
                        {[
                            { title: 'World Sleep Congress 2025', date: 'March 15-18', location: 'Rome, Italy', type: 'Clinical' },
                            { title: 'PAUHEX Bio-Sync Unveiling', date: 'May 02', location: 'Silicon Valley HQ', type: 'Product Launch' },
                            { title: 'CES 2025: Future of Health', date: 'Jan 07-10', location: 'Las Vegas, USA', type: 'Innovation' }
                        ].map((ev, i) => (
                            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-12 bg-[#F9FBFD] rounded-sm group hover:bg-white hover:shadow-xl transition-all">
                                <div>
                                    <div className="text-[10px] font-bold text-[#179A97] tracking-widest uppercase mb-1">{ev.type}</div>
                                    <h3 className="text-2xl font-light text-[#003568] mb-4">{ev.title}</h3>
                                    <div className="flex items-center gap-6 text-xs text-[#A0AEC0] uppercase tracking-widest">
                                        <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {ev.date}</div>
                                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {ev.location}</div>
                                    </div>
                                </div>
                                <button className="mt-8 md:mt-0 flex items-center gap-2 text-xs font-bold text-[#003568] uppercase tracking-widest hover:text-[#179A97] transition-all">
                                    Event Details <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
