'use client';

import { motion } from 'framer-motion';
import { products } from '../../data/products';
import {
    Cpu, Network, Lock, Zap,
    ArrowRight, Check
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HealthHubPage() {
    const product = products.find(p => p.id === 'health-hub');

    if (!product) return null;

    return (
        <div className="min-h-screen bg-white">
            {/* 1. HERO - Minimalist / Computing Theme */}
            <section className="relative h-[85vh] min-h-[700px] bg-white overflow-hidden flex items-center pt-20">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 relative"
                        >
                            {/* Decorative PCB Lines */}
                            <div className="absolute top-0 left-0 w-full h-full border border-gray-100 rounded-lg -z-10 rotate-3"></div>
                            <div className="absolute top-0 left-0 w-full h-full border border-gray-50 rounded-lg -z-10 -rotate-3"></div>

                            <Image
                                src="/images/health-hub-v2.png"
                                alt="Pauhex Health Hub"
                                width={600}
                                height={600}
                                className="object-contain"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest mb-8 rounded-[2px]">
                                <Cpu className="w-3 h-3" />
                                Edge AI Computing
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light text-[#2D3748] leading-[1.1] mb-8">
                                Health <span className="font-semibold text-[#179A97]">Hub</span>
                            </h1>
                            <p className="text-xl text-[#718096] font-light leading-relaxed mb-10">
                                The central cortex of the smart care ecosystem.
                                Processing all vital data locally on an 8-core NPU to ensure speed, reliability, and absolute privacy.
                            </p>

                            <div className="flex gap-12 mb-12 border-t border-b border-gray-100 py-8">
                                <div>
                                    <div className="text-3xl font-bold text-[#2D3748]">6.0 <span className="text-sm font-normal text-gray-400">TOPS</span></div>
                                    <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">AI Power</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#2D3748]">0.02<span className="text-sm font-normal text-gray-400">s</span></div>
                                    <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Latency</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#2D3748]">AES<span className="text-sm font-normal text-gray-400">256</span></div>
                                    <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Encryption</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. CONNECTIVITY MAP */}
            <section className="py-24 bg-[#003568] text-white">
                <div className="container text-center">
                    <h2 className="text-4xl font-light mb-4">Unified Connectivity</h2>
                    <p className="text-white/60 font-light mb-16 max-w-2xl mx-auto">
                        Supports Matter, Zigbee, Thread, and Wi-Fi 6. The Hub connects everything from the Radar to the Dispenser.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['Dispenser Pro', 'Vital Radar', 'Bio-Link Mat', 'Panic Button'].map((device, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-sm hover:-translate-y-2 transition-transform bg-white/5">
                                <Network className="w-8 h-8 text-[#179A97] mb-4 mx-auto" />
                                <div className="font-bold">{device}</div>
                                <div className="text-xs text-white/40 mt-2">Connected</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. HARDWARE SPECS */}
            <section id="specs" className="py-24 bg-white">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-3xl font-light text-[#2D3748] mb-8">Hardware Architecture</h3>
                            <ul className="space-y-4">
                                {product.specs.map((spec, i) => (
                                    <li key={i} className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-500 font-light">{spec.label}</span>
                                        <span className="font-bold text-[#2D3748]">{spec.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 bg-gray-50 p-12 rounded-sm text-center">
                            <Lock className="w-16 h-16 text-[#179A97] mx-auto mb-6" />
                            <h4 className="text-xl font-bold text-[#2D3748] mb-4">Privacy Vault</h4>
                            <p className="text-gray-500 font-light">
                                Data never leaves the home unless you authorize it. <br />
                                All biometrics are stored on the encrypted eMMC chip locally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
