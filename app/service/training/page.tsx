'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Video, Book, UserCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TrainingPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="pt-32 pb-24 bg-[#F8FAFB]">
                <div className="container">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                        <GraduationCap className="w-3 h-3" /> Professional Learning
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-light text-[#003366] mb-6">Expert <span className="font-semibold">Training</span></h1>
                    <p className="text-xl text-gray-500 font-light max-w-2xl">Equipping healthcare professionals and family caregivers with the knowledge to maximize execution intelligence.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Video className="w-8 h-8" />,
                                title: "Video Masterclasses",
                                desc: "Step-by-step visual guides for device setup, rule configuration, and data interpretation."
                            },
                            {
                                icon: <Book className="w-8 h-8" />,
                                title: "Clinician Guides",
                                desc: "In-depth clinical documentation on how Pauhex fits into chronic care and medication safety workflows."
                            },
                            {
                                icon: <UserCheck className="w-8 h-8" />,
                                title: "Certification",
                                desc: "Official Pauhex Specialist certification for facility staff to ensure 100% compliance standards."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-10 border border-gray-100 rounded-sm hover:border-[#179A97] hover:bg-gray-50 transition-all group">
                                <div className="text-[#179A97] mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-2xl font-semibold text-[#003366] mb-4">{item.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed mb-8">{item.desc}</p>
                                <button className="text-sm font-bold uppercase tracking-widest text-[#003366] flex items-center gap-2 group-hover:gap-4 transition-all">Start Learning <ArrowRight className="w-4 h-4" /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
