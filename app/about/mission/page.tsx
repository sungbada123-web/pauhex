'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MissionVision() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-white">
                <div className="container relative z-10 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                            <Target className="w-3 h-3" /> Purpose & Direction
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-light text-[#003366] leading-tight mb-8">
                            Dignity Through <span className="font-semibold text-[#179A97]">Execution.</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
                            Our mission is to eliminate the burden of health execution from
                            seniors and their caregivers, replacing anxiety with data-driven
                            certainty.
                        </p>
                    </motion.div>
                </div>
                {/* Visual Accent */}
                <div className="relative h-[400px] w-full mt-12 bg-gray-50 overflow-hidden">
                    <Image
                        src="/images/about-mission-hero.png"
                        alt="Mission and Vision"
                        fill
                        className="object-cover opacity-50"
                    />
                </div>
            </section>

            {/* Mission & Vision Cards */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="p-12 bg-gray-50 rounded-sm hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                            <Target className="w-12 h-12 text-[#179A97] mb-8" />
                            <h2 className="text-3xl font-light text-[#003366] mb-6">Our <span className="font-semibold">Mission</span></h2>
                            <p className="text-gray-600 font-light leading-relaxed text-lg">
                                To build a world where chronic health management is automated,
                                invisible, and absolute. We combine medical-grade hardware
                                with proactive AI to ensure that every necessary health
                                action—from medication to monitoring—is executed perfectly.
                            </p>
                        </div>
                        <div className="p-12 bg-[#003366] text-white rounded-sm hover:shadow-xl transition-all">
                            <Eye className="w-12 h-12 text-[#179A97] mb-8" />
                            <h2 className="text-3xl font-light mb-6">Our <span className="font-semibold">Vision</span></h2>
                            <p className="text-white/70 font-light leading-relaxed text-lg">
                                To become the global standard for "Execution Intelligence" in
                                home healthcare. We envision a future where the home itself
                                acts as a proactive care team, allowing seniors to live
                                independently for longer with total dignity and safety.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container">
                    <h2 className="text-3xl font-light text-[#003366] mb-16 text-center">Guided by <span className="font-semibold">Execution Values</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <ShieldCheck className="w-8 h-8" />,
                                title: "Zero Error Fatigue",
                                desc: "We design systems that don't rely on human memory or constant vigilance. Our hardware enforces the rules."
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "Empathetic Privacy",
                                desc: "Health data is the most private data. Our edge-based AI ensures data stays where it belongs—with the user."
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Engineering Rigor",
                                desc: "From Hainan to the world, our medical-grade manufacturing ensures every device is built to last a lifetime."
                            }
                        ].map((value, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-[#179A97] mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-[#003366] mb-4">{value.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
