'use client';

import { motion } from 'framer-motion';
import { Eye, ArrowRight, CheckCircle2, Zap, Shield, Microscope } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function MedLightPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. HERO - Portable Smart Light */}
            <section className="relative h-[85vh] min-h-[700px] bg-[#F9FBFD] overflow-hidden flex items-center pt-20">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#179A97]/10 text-[#179A97] text-xs font-bold uppercase tracking-widest mb-8 rounded-[2px]">
                                <Zap className="w-3 h-3" />
                                Smart Vision Series
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light text-[#003366] leading-[1.1] mb-8">
                                Med-<span className="font-semibold">Light</span>
                            </h1>
                            <p className="text-xl text-[#5A6A85] font-light leading-relaxed mb-10 max-w-xl">
                                AI-enhanced visual assistance for independent living. The Pauhex Med-Light combines medical-grade
                                illumination with localized computer vision to assist seniors with medication identification
                                and daily tasks under optimal conditions.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] transition-all rounded-[2px] inline-flex items-center gap-2"
                                >
                                    Pre-Order Now
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[550px] w-full bg-white rounded-sm border border-gray-100 shadow-2xl flex items-center justify-center p-12 overflow-hidden"
                        >
                            <Image
                                src="/images/med-light.png"
                                alt="Pauhex Med-Light Concept"
                                width={600}
                                height={600}
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. CORE UTILITY */}
            <section className="py-32 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl font-light text-[#003366] mb-8">More Than Just <span className="font-bold">Illumination</span></h2>
                            <div className="space-y-8">
                                {[
                                    { title: 'AI OCR Recognition', desc: 'Instantly identifies medication labels and instructions via high-precision edge-AI camera.' },
                                    { title: 'Circadian Sync', desc: 'Automatically adjusts color temperature to support healthy sleep-wake cycles for seniors.' },
                                    { title: 'Contrast Enhancement', desc: 'Specific spectral modes designed to assist those with macular degeneration or glaucoma.' }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-2 h-2 rounded-full bg-[#179A97] mt-3"></div>
                                        <div>
                                            <h4 className="text-lg font-bold text-[#003366] mb-1">{feature.title}</h4>
                                            <p className="text-gray-500 font-light">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#F4F7F9] p-12 rounded-sm border border-gray-100">
                            <h3 className="text-2xl font-light text-[#003366] mb-6 italic">"A beacon of clarity in every senior's home."</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                By integrating vision sensors directly into standard home lighting, we provide safety without
                                the intrusive appearance of typical medical devices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
