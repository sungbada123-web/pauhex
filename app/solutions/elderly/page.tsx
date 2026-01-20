'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowLeft, ShieldCheck, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ElderlySolutionPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/solutions" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Solutions
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                                Care & Safety
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Elderly <br /><span className="font-semibold">Care</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Non-invasive safety monitoring that preserves dignity. Our system provides
                                fall detection and vital sign alerts without cameras or microphones.
                            </p>
                        </motion.div>
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/pauhex_elderly_care.png"
                                alt="Elderly Solution"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 mb-32">
                        {[
                            { title: 'Privacy Preserved', desc: 'Radar technology maps posture and vitals as abstract data, ensuring complete visual privacy.' },
                            { title: 'Sleep Quality Tracking', desc: 'Monitors deterioration in sleep architecture as an early indicator of cognitive issues.' },
                            { title: 'Real-time Alerts', desc: 'Instant notifications to caregivers for irregular breathing or extended bed absences.' }
                        ].map((card, i) => (
                            <div key={i} className="flex-1 p-12 bg-[#F9FBFD] rounded-sm group hover:bg-white hover:shadow-xl transition-all">
                                <h3 className="text-2xl font-light text-[#003568] mb-6 group-hover:text-[#179A97] transition-colors">{card.title}</h3>
                                <p className="text-[#718096] font-light leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="relative h-96 w-full rounded-sm overflow-hidden mb-32 shadow-2xl">
                        <Image src="/images/pauhex_staff_clinical.png" alt="Clinical Oversight" fill className="object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#003568] to-transparent flex items-center px-12 md:px-24">
                            <div className="max-w-xl text-white">
                                <h3 className="text-3xl font-light mb-6 uppercase tracking-wider">Clinical Oversight</h3>
                                <p className="text-white/80 font-light leading-relaxed mb-8">
                                    Our elderly care solutions are developed in coordination with geriatric specialists
                                    to ensure they meet the specific needs of nursing facilities and home care environments.
                                </p>
                                <div className="text-xs font-bold tracking-[0.3em] uppercase opacity-70 border-l-2 border-[#179A97] pl-4">Verified Technology</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
