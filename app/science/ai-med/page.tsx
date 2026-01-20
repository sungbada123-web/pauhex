'use client';

import { motion } from 'framer-motion';
import { Brain, Search, ShieldCheck, Database, Cpu, Activity, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AIRecognitionResearch() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#F8FAFB]">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                                <Brain className="w-3 h-3" /> Core AI Research
                            </div>
                            <h1 className="text-5xl lg:text-Long font-light text-[#003366] leading-tight mb-8">
                                AI Medication <span className="font-semibold">Recognition.</span>
                            </h1>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl">
                                Our proprietary neural networks identify thousands of medication types
                                with 99.9% accuracy. By combining multi-spectral imaging with edge-based
                                inference, we eliminate the risk of manual loading errors.
                            </p>
                            <Link
                                href="/science"
                                className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] transition-all rounded-sm inline-flex items-center gap-2"
                            >
                                Research Overview <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/research-ai-hero.png"
                                alt="AI Medication Research"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technical Deep Dive */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-light text-[#003366] mb-12">The <span className="font-semibold">Vision Architecture</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="p-8 bg-gray-50 border-l-4 border-[#179A97]">
                                    <h3 className="text-xl font-bold text-[#003366] mb-4">Multi-Spectral Analysis</h3>
                                    <p className="text-gray-600 font-light leading-relaxed">
                                        We don't just use RGB. Our sensors capture IR and UV signatures to verify
                                        chemical coatings and pill integrity, ensuring no counterfeit or
                                        degraded medication is dispensed.
                                    </p>
                                </div>
                                <div className="p-8 bg-gray-50 border-l-4 border-[#179A97]">
                                    <h3 className="text-xl font-bold text-[#003366] mb-4">Edge-Based Inference</h3>
                                    <p className="text-gray-600 font-light leading-relaxed">
                                        All recognition happens locally on the RK3588's 6.0 TOPS NPU.
                                        Your health data never leaves the device, ensuring absolute privacy
                                        and zero-latency safety enforcement.
                                    </p>
                                </div>
                            </div>
                            <div className="relative bg-[#003366] p-12 text-white overflow-hidden rounded-sm group">
                                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                <h4 className="text-2xl font-light mb-8">Research <span className="font-semibold">Milestones</span></h4>
                                <ul className="space-y-6 relative z-10">
                                    <li className="flex items-center gap-4">
                                        <div className="w-2 h-2 bg-[#179A97] rounded-full"></div>
                                        <span className="text-white/80 font-light">50,000+ Medication Dataset</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-2 h-2 bg-[#179A97] rounded-full"></div>
                                        <span className="text-white/80 font-light">&lt;200ms Recognition Speed</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-2 h-2 bg-[#179A97] rounded-full"></div>
                                        <span className="text-white/80 font-light">Cross-Lighting Robustness</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-2 h-2 bg-[#179A97] rounded-full"></div>
                                        <span className="text-white/80 font-light">Modular Fine-Tuning Layer</span>
                                    </li>
                                </ul>
                                <Cpu className="absolute bottom-[-20px] right-[-20px] w-32 h-32 text-white/5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
