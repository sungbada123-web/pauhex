'use client';

import { motion } from 'framer-motion';
import { products } from '../../data/products';
import {
    Zap, ShieldCheck, Activity, CheckCircle2,
    ArrowRight, Lock, Server, Smartphone
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MedProPage() {
    // Hardcoded ID for this specific page to ensure strict typing and data fetching
    const product = products.find(p => p.id === 'med-pro');

    if (!product) return null;

    return (
        <div className="min-h-screen bg-white">
            {/* 1. HERO SECTION - Industrial/Medical Layout */}
            <section className="relative h-[90vh] min-h-[700px] bg-[#F4F7F9] overflow-hidden flex items-center pt-20">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-8 rounded-[2px]">
                                <ShieldCheck className="w-3 h-3" />
                                Medical Grade Dispensing
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light text-[#003366] leading-[1.1] mb-8">
                                Plantiva <span className="font-semibold">Health Hub</span>
                            </h1>
                            <h2 className="text-2xl text-[#179A97] font-light mb-8">
                                32-Channel AI Precision Dispensing (99.99% Accuracy)
                            </h2>
                            <p className="text-lg text-[#5A6A85] font-light leading-relaxed mb-10 max-w-xl">
                                Developed in collaboration with clinical PharmD experts and Stanford-affiliated PhDs, the Plantiva Health Hub eliminates human error.
                                Our computer vision verification provides a 100% adherence rate, reducing medication errors by 85% in institutional settings.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] transition-all rounded-[2px] inline-flex items-center gap-2"
                                >
                                    Request Demo
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="#specs"
                                    className="px-8 py-4 bg-white text-[#4A5568] text-sm font-bold uppercase tracking-wider hover:bg-[#E2E8F0] hover:text-[#003366] transition-all rounded-[2px] shadow-sm border border-gray-100"
                                >
                                    Full Specs
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Image - Floating Glass Effect */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] w-full bg-gradient-to-br from-white to-gray-50 rounded-sm border border-white/40 shadow-2xl flex items-center justify-center p-12"
                        >
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                            <Image
                                src="/images/pro-dispense-new-1.png"
                                alt="Plantiva Health Hub Device"
                                width={600}
                                height={600}
                                className="object-contain drop-shadow-2xl z-10"
                                priority
                            />
                            {/* Technical Overlay Lines */}
                            <div className="absolute top-10 right-10 text-right">
                                <div className="text-xs font-mono text-gray-400">CHANNELS</div>
                                <div className="text-2xl font-bold text-[#003366]">32</div>
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <div className="text-xs font-mono text-gray-400">LOCK TYPE</div>
                                <div className="text-lg font-bold text-[#003366]">ELECTRO-MAG V3</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. DEEP DIVE FEATURES */}
            <section className="py-32 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Feature 1 */}
                        <div className="group">
                            <div className="w-16 h-16 bg-[#F4F7F9] mb-8 flex items-center justify-center text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors duration-500 rounded-sm">
                                <Lock className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-light text-[#003366] mb-4">Physical <span className="font-semibold">Locking</span></h3>
                            <p className="text-[#5A6A85] leading-relaxed font-light">
                                Unlike rotating trays, each of our 32 channels is independently secured.
                                The compartment only unlocks when the specific dosing time is reached and verified by AI.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="group">
                            <div className="w-16 h-16 bg-[#F4F7F9] mb-8 flex items-center justify-center text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors duration-500 rounded-sm">
                                <Server className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-light text-[#003366] mb-4">Edge <span className="font-semibold">Verification</span></h3>
                            <p className="text-[#5A6A85] leading-relaxed font-light">
                                Built-in RK3588 NPU processes computer vision verification locally.
                                Computer vision verifies ingestion events in real-time, confirming if the pill was actually taken, not just if the drawer was opened.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="group">
                            <div className="w-16 h-16 bg-[#F4F7F9] mb-8 flex items-center justify-center text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors duration-500 rounded-sm">
                                <Smartphone className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-light text-[#003366] mb-4">Caregiver <span className="font-semibold">Sync</span></h3>
                            <p className="text-[#5A6A85] leading-relaxed font-light">
                                Real-time 5G/WiFi connection pushes missed dose alerts to family members or nurses within 30 seconds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SPECS & DATA */}
            <section id="specs" className="py-24 bg-[#02021c] text-white">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="w-full md:w-1/3">
                            <h2 className="text-4xl font-light mb-8">Technical <br /><span className="font-bold text-[#179A97]">Specifications</span></h2>
                            <p className="text-gray-400 font-light mb-8">
                                Engineered for clinical reliability. The Pro-Dispense meets rigorous medical electrical safety standards.
                            </p>
                            <div className="h-1 w-24 bg-[#179A97]"></div>
                        </div>
                        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                            {product.specs.map((spec, i) => (
                                <div key={i} className="border-b border-white/10 pb-4">
                                    <div className="text-xs font-bold text-[#179A97] uppercase tracking-widest mb-1">{spec.label}</div>
                                    <div className="text-xl font-light text-white">{spec.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
