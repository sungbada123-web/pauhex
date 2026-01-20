'use client';

import { motion } from 'framer-motion';
import { Cpu, ArrowLeft, Activity, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AIAlgorithmsPage() {
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
                                Intelligence at the Edge
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8">AI Algorithms</h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                VÖLTZMANN does not rely on cloud processing for real-time therapy. Our Edge-AI models,
                                powered by advanced NPU architecture, process biometric data locally with millisecond latency.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden bg-[#F9FBFD]">
                            <Image
                                src="/images/pauhex_ai_server_realism.png"
                                alt="AI Algorithms"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="bg-[#F9FBFD] p-16 mb-24 rounded-sm">
                        <h3 className="text-3xl font-light text-[#003568] mb-12 border-b border-[#E2E8F0] pb-6">Core Technical Pillars</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                            {[
                                { title: 'Local NPU Inference', desc: 'Secure local processing ensuring absolute data privacy.' },
                                { title: 'Adaptive Learning', desc: 'Therapy loops that evolve with your unique sleep profile.' },
                                { title: 'Cross-Modal Sync', desc: 'Synchronizing haptic, thermal, and electrical stimuli in real-time.' }
                            ].map((pillar, i) => (
                                <div key={i}>
                                    <div className="text-xs font-bold text-[#179A97] mb-4 uppercase tracking-widest">Pillar {i + 1}</div>
                                    <h4 className="text-xl font-medium text-[#2D3748] mb-4">{pillar.title}</h4>
                                    <p className="text-[#718096] font-light text-sm leading-relaxed">{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
