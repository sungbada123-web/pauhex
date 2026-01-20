'use client';

import { motion } from 'framer-motion';
import { Sun, ArrowLeft, Clock, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CircadianSolutionPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/solutions" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Solutions
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                                Biological Alignment
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Circadian <br /><span className="font-semibold">Rhythm Sync</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Re-align your internal clock. For shift workers, frequent travelers, and night owls,
                                VÖLTZMANN provides the light and temperature stimuli needed to correct circadian disruption.
                            </p>
                        </motion.div>
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/pauhex_medical_lab.png" // Precision engineering context
                                alt="Circadian Solution"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="py-24 bg-[#003568] text-white px-16 rounded-sm mb-32 relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                            {[
                                { title: 'Melatonin Logic', icon: <Clock />, desc: 'Stimulating production through precise spectral control.' },
                                { title: 'Core Temp Control', icon: <Activity />, desc: 'Lowering core body temperature to signal sleep readiness.' },
                                { title: 'Adaptive Wakeup', icon: <Sun />, desc: 'Simulated sunrise for a gentle, cortisol-balanced awakening.' }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-center text-[#179A97] mb-6">{item.icon}</div>
                                    <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
