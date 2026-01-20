'use client';

import { motion } from 'framer-motion';
import { BookOpen, MapPin, Cpu, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandStory() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#003366] text-white">
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#179A97] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                                <BookOpen className="w-3 h-3" /> The Pauhex Narrative
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight mb-8">
                                Intelligence that <span className="font-semibold text-[#179A97]">Executes.</span>
                            </h1>
                            <p className="text-xl text-white/60 font-light leading-relaxed mb-10">
                                Born from the intersection of U.S. architectural innovation
                                and China's high-precision engineering, PAUHEX is redefining
                                the standard for proactive healthcare.
                            </p>
                        </motion.div>
                    </div>
                </div>
                {/* Visual Background */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
                    <Image
                        src="/images/about-story-hero.png"
                        alt="Brand Story"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Our Origins */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative aspect-square bg-[#F9FBFD] rounded-sm overflow-hidden border border-gray-100 shadow-inner group">
                            <Image
                                src="/images/pauhex-global-synergy.png"
                                alt="Pauhex Global Synergy: Bridging the Gap"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-white via-white/80 to-transparent">
                                <h3 className="text-xl font-light italic text-[#003366] text-center">"Bridging the Gap Between Concept and Reality."</h3>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-light text-[#003366] mb-8">A <span className="font-semibold">Global Synergy</span></h2>
                            <div className="space-y-12">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-[#F8FAFB] flex items-center justify-center rounded-sm flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-[#179A97]" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#003366] mb-2">Hainan Engineering Hub</h4>
                                        <p className="text-gray-600 font-light leading-relaxed">
                                            Our central assembly and testing facility in Hainan leverages
                                            local manufacturing expertise to deliver medical-grade hardware
                                            at scale, without compromising on precision.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-[#F8FAFB] flex items-center justify-center rounded-sm flex-shrink-0">
                                        <Cpu className="w-6 h-6 text-[#179A97]" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#003366] mb-2">U.S. Technology Roots</h4>
                                        <p className="text-gray-600 font-light leading-relaxed">
                                            The core AI architecture and mmWave algorithms were conceptualized
                                            by a team of visionary technologists in the U.S., focusing on
                                            privacy-first, edge-based execution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Vision */}
            <section className="py-24 bg-[#003366] text-white">
                <div className="container text-center max-w-4xl mx-auto">
                    <ShieldCheck className="w-16 h-16 text-[#179A97] mx-auto mb-8" />
                    <h2 className="text-3xl lg:text-4xl font-light mb-8">Our <span className="font-semibold">Unwavering Commitment</span></h2>
                    <p className="text-xl text-white/70 font-light leading-relaxed mb-12">
                        We don't believe in "smart homes" that just notify you when things go wrong.
                        We believe in proactive ecosystems that PREVENT them from going wrong.
                        PAUHEX is dedicated to giving seniors back their dignity through execution
                        intelligence.
                    </p>
                    <Link
                        href="/about/mission"
                        className="inline-flex items-center gap-2 text-[#179A97] hover:text-white transition-colors font-bold uppercase tracking-widest text-sm"
                    >
                        View Our Mission <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
