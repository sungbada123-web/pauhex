'use client';

import { motion } from 'framer-motion';
import { products } from '../../data/products';
import {
    Waves, Thermometer, Moon, Smartphone,
    ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SyncMatPage() {
    const product = products.find(p => p.id === 'sync-mat');

    if (!product) return null;

    return (
        <div className="min-h-screen bg-white">
            {/* 1. HERO - Calm / Sleep Theme */}
            <section className="relative h-[85vh] min-h-[700px] bg-[#2D3748] overflow-hidden flex items-center pt-20 text-white">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src="/images/bio-link.png"
                                alt="Bio Link Mat"
                                width={700}
                                height={500}
                                className="object-contain drop-shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-8 rounded-[2px]">
                                <Moon className="w-3 h-3" />
                                Sleep Therapy
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light leading-[1.1] mb-8">
                                Bio <span className="font-semibold text-[#179A97]">Link</span>
                            </h1>
                            <h2 className="text-2xl text-gray-300 font-light mb-8">
                                Resonant Haptic Sleep Interface
                            </h2>
                            <p className="text-lg text-gray-400 font-light leading-relaxed mb-10 max-w-xl">
                                Non-invasive sleep intervention. Using 0.1Hz low-frequency vibration and graphene heating to guide autonomic nervous system regulation.
                            </p>

                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-[#2D3748] text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] hover:text-white transition-all rounded-[2px] inline-flex items-center gap-2"
                            >
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. SCIENCE OF SLEEP */}
            <section className="py-32 bg-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-light text-[#2D3748] mb-6">Bio-Feedback Mechanism</h2>
                        <p className="text-gray-500 font-light text-xl">
                            How the Bio-Link Mat hacks the stress response to induce deep sleep.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border-l-2 border-[#179A97] hover:bg-gray-50 transition-colors">
                            <Waves className="w-10 h-10 text-[#179A97] mb-6" />
                            <h3 className="text-xl font-bold text-[#2D3748] mb-3">Haptic Resonance</h3>
                            <p className="text-gray-500 font-light">
                                Gentle vibrations match the alpha-wave frequency of the human brain, physically guiding the body into relaxation.
                            </p>
                        </div>
                        <div className="p-8 border-l-2 border-[#2D3748] hover:bg-gray-50 transition-colors">
                            <Thermometer className="w-10 h-10 text-[#2D3748] mb-6" />
                            <h3 className="text-xl font-bold text-[#2D3748] mb-3">Graphene Heat</h3>
                            <p className="text-gray-500 font-light">
                                Instant 3-second heating to 37°C. Far-infrared radiation promotes circulation without dry heat sensation.
                            </p>
                        </div>
                        <div className="p-8 border-l-2 border-[#179A97] hover:bg-gray-50 transition-colors">
                            <Smartphone className="w-10 h-10 text-[#179A97] mb-6" />
                            <h3 className="text-xl font-bold text-[#2D3748] mb-3">Closed-Loop AI</h3>
                            <p className="text-gray-500 font-light">
                                Works with the Vital Radar. When sleep is detected, the mat automatically turns off or adjusts intensity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SPECS */}
            <section id="specs" className="py-20 bg-[#F4F7F9]">
                <div className="container">
                    <div className="bg-white p-12 shadow-lg rounded-sm flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/3 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-[#2D3748] mb-2">Device Specs</h3>
                            <div className="text-sm text-gray-400">Model: BL-2026-PRO</div>
                        </div>
                        <div className="w-full md:w-2/3 grid grid-cols-2 gap-8">
                            {product.specs.map((spec, i) => (
                                <div key={i}>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{spec.label}</div>
                                    <div className="text-lg font-semibold text-[#2D3748]">{spec.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
