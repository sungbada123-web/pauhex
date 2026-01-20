'use client';

import { motion } from 'framer-motion';
import { products } from '../../data/products';
import {
    Radar, Activity, AlertTriangle, EyeOff,
    ArrowRight, Wifi, Shield
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function VitalRadarPage() {
    const product = products.find(p => p.id === 'vital-radar');

    if (!product) return null;

    return (
        <div className="min-h-screen bg-white">
            {/* 1. HERO - Radar Theme */}
            <section className="relative h-[90vh] min-h-[700px] bg-[#001529] overflow-hidden flex items-center pt-20 text-white">
                {/* Radar Waves Background Animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>

                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#179A97]/20 border border-[#179A97]/50 text-[#179A97] text-xs font-bold uppercase tracking-widest mb-8 rounded-[2px]">
                                <Radar className="w-3 h-3" />
                                60GHz Millimeter Wave
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light text-[#003366] leading-[1.1] mb-8">
                                Vital <span className="font-semibold text-[#179A97]">Radar V2</span>
                            </h1>
                            <h2 className="text-2xl text-[#179A97] font-light mb-8 italic">
                                Ultra-Compact Bedside Contactless Guardian
                            </h2>
                            <p className="text-lg text-[#5A6A85] font-light leading-relaxed mb-10 max-w-xl">
                                Reimagined for intimacy and precision. The Pauhex Vital Radar V2 is a discreet, coin-sized sensor
                                mounted directly above the bedside. Using 60GHz mmWave technology, it provides clinical-grade sleep
                                apnea detection and heart-rate variability monitoring without a single wire or wearable.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#179A97] text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#003366] transition-all rounded-[2px] inline-flex items-center gap-2"
                                >
                                    Get Protection
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative h-[500px] flex items-center justify-center"
                        >
                            <Image
                                src="/images/vital-radar-refined.png"
                                alt="Pauhex Vital Radar"
                                width={500}
                                height={500}
                                className="object-contain z-10 drop-shadow-[0_0_50px_rgba(23,154,151,0.3)]"
                            />
                            {/* Scanning Line Effect (CSS based logic usually, simplified here) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#179A97]/0 via-[#179A97]/10 to-[#179A97]/0 animate-pulse rounded-full blur-3xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. PRIVACY & TECH */}
            <section className="py-32 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <Image
                                src="/images/pauhex-eye-radar.png"
                                alt="Radar Tech"
                                width={600}
                                height={400}
                                className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-light text-[#003366] mb-8">
                                Why <span className="font-semibold">Radar?</span>
                            </h2>
                            <ul className="space-y-8">
                                <li className="flex gap-6">
                                    <div className="w-12 h-12 shrink-0 bg-[#F4F7F9] flex items-center justify-center text-[#179A97] rounded-sm">
                                        <EyeOff className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#2D3748] mb-2">100% Privacy Safe</h3>
                                        <p className="text-gray-500 font-light">No cameras, no images. We only process point-cloud data, making it safe for bedrooms and bathrooms.</p>
                                    </div>
                                </li>
                                <li className="flex gap-6">
                                    <div className="w-12 h-12 shrink-0 bg-[#F4F7F9] flex items-center justify-center text-[#179A97] rounded-sm">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#2D3748] mb-2">Instant Fall Detection</h3>
                                        <p className="text-gray-500 font-light">Detects rapid height changes and immobility. Alerts are sent instantly without needing a user to press a button.</p>
                                    </div>
                                </li>
                                <li className="flex gap-6">
                                    <div className="w-12 h-12 shrink-0 bg-[#F4F7F9] flex items-center justify-center text-[#179A97] rounded-sm">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#2D3748] mb-2">Sleep Vitals</h3>
                                        <p className="text-gray-500 font-light">Contact-free tracking of respiration rate and sleep apnea events during the night.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SPECS */}
            <section id="specs" className="py-24 bg-[#F9FBFD] border-t border-gray-100">
                <div className="container max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light text-[#003366]">Radar Specifications</h2>
                    </div>
                    <div className="bg-white p-12 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {product.specs.map((spec, i) => (
                            <div key={i} className="flex flex-col">
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{spec.label}</div>
                                <div className="text-xl font-semibold text-[#003366]">{spec.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
