'use client';

import { motion } from 'framer-motion';
import { Radar, Zap, Activity, ShieldCheck, Cpu, Waves, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RadarResearch() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#0F172A] text-white">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#179A97] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                                <Radar className="w-3 h-3" /> Sensing Technology
                            </div>
                            <h1 className="text-5xl lg:text-Long font-light text-white leading-tight mb-8">
                                mmWave <span className="font-semibold text-[#179A97]">Sensing Algorithms.</span>
                            </h1>
                            <p className="text-xl text-white/60 font-light leading-relaxed mb-10 max-w-xl">
                                Harnessing 60GHz millimeter-wave technology for sub-millimeter
                                motion detection. Our algorithms extract vital signs and
                                behavioral patterns from raw radar point-clouds, enabling
                                proactive care without cameras.
                            </p>
                            <Link
                                href="/science"
                                className="px-8 py-4 bg-[#179A97] text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#003366] transition-all rounded-sm inline-flex items-center gap-2"
                            >
                                Research Overview <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl border border-white/5"
                        >
                            <Image
                                src="/images/research-radar-hero.png"
                                alt="mmWave Radar Research"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technical Breakthroughs */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-light text-[#003366] mb-8">Sub-Millimeter <span className="font-semibold">Precision</span></h2>
                            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                                Our research focuses on decomposing complex radar reflections into distinct
                                physiological signals. By applying proprietary signal processing stacks,
                                we can isolate hertz-level chest wall movements corresponding to respiration
                                and heartbeats, even in cluttered indoor environments.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Dynamic Clutter Suppression", desc: "Advanced filtering to remove background noise from furniture and oscillating fans." },
                                    { title: "Multi-Subject Separation", desc: "Distinguishing between two people in the same room using spatial beamforming." },
                                    { title: "Posture AI Classifier", desc: "Deep learning models to detect falls vs. intentional sitting or lying down." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1"><Waves className="w-5 h-5 text-[#179A97]" /></div>
                                        <div>
                                            <h4 className="font-semibold text-[#003366]">{item.title}</h4>
                                            <p className="text-sm text-gray-600 font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#F8FAFB] p-12 rounded-sm border border-gray-100">
                            <div className="aspect-square relative max-w-[300px] mx-auto mb-12">
                                <div className="absolute inset-0 border-2 border-dashed border-[#179A97]/20 rounded-full animate-spin-slow"></div>
                                <div className="absolute inset-8 border border-[#003366]/10 rounded-full"></div>
                                <Activity className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-[#003366]/20" />
                                <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#179A97] rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-[#179A97]/50"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-sm text-gray-500 font-light">Waveform Type</span>
                                    <span className="text-sm font-bold text-[#003366]">FMCW</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-sm text-gray-500 font-light">Sweep Bandwidth</span>
                                    <span className="text-sm font-bold text-[#003366]">4GHz</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-sm text-gray-500 font-light">Angular Resolution</span>
                                    <span className="text-sm font-bold text-[#003366]">15°</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
