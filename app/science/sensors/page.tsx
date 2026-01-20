'use client';

import { motion } from 'framer-motion';
import { Activity, ArrowLeft, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SensorsPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/science" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Science
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div>
                            <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                                Hardware Innovation
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8">mmWave Sensors</h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Our medical-grade 60GHz millimeter-wave radar technology enables contact-free monitoring
                                of micro-movements, including sub-millimeter thoracic expansion for respiration tracking.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden bg-[#F9FBFD]">
                            <Image
                                src="/images/pauhex_sensor_chip_realism.png"
                                alt="mmWave Technology"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-24">
                        <div className="flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/3">
                                <h3 className="text-2xl font-light text-[#003568] mb-6">Contact-Free Precision</h3>
                                <p className="text-[#718096] font-light leading-relaxed">
                                    Unlike wearables, VÖLTZMANN sensors require no physical contact, eliminating the discomfort
                                    and skin irritation often associated with long-term sleep monitoring.
                                </p>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="p-10 border-l border-[#179A97] bg-[#F9FBFD]">
                                    <div className="text-3xl font-light text-[#003568] mb-4">99.8% Accuracy</div>
                                    <p className="text-sm text-[#718096] font-light">Correlation with clinical Polysomnography (PSG) in laboratory settings.</p>
                                </div>
                                <div className="p-10 border-l border-[#179A97] bg-[#F9FBFD]">
                                    <div className="text-3xl font-light text-[#003568] mb-4">60 GHz</div>
                                    <p className="text-sm text-[#718096] font-light">Ultra-precise frequency band for microscopic movement detection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
