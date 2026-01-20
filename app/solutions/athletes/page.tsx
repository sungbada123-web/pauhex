'use client';

import { motion } from 'framer-motion';
import { Target, ArrowLeft, Activity, Trophy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AthletesSolutionPage() {
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
                                Performance Optimization
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Professional <br /><span className="font-semibold">Athletes</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Sleep is the ultimate performance enhancer. Our system synchronizes biological recovery
                                with training cycles to ensure peak cognitive and physical readiness.
                            </p>
                        </motion.div>
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/pauhex_athlete_recovery.png"
                                alt="Athletes Solution"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="bg-[#003568] text-white p-20 mb-32 rounded-sm overflow-hidden relative">
                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-4xl font-light mb-8 italic">"Optimization is not an option; it's a requirement."</h2>
                            <p className="text-white/70 font-light mb-12 leading-relaxed text-lg">
                                Used by elite European football clubs and Olympic training centers, VÖLTZMANN is the
                                choice for organizations that treat sleep as a critical metric of success.
                            </p>
                            <div className="flex gap-12">
                                <div><div className="text-3xl font-bold text-[#179A97] mb-1">15%</div><div className="text-xs uppercase tracking-widest opacity-60">Faster Recovery</div></div>
                                <div><div className="text-3xl font-bold text-[#179A97] mb-1">22%</div><div className="text-xs uppercase tracking-widest opacity-60">Higher Focus</div></div>
                            </div>
                        </div>
                        <div className="absolute top-1/2 -right-20 -translate-y-1/2 opacity-10">
                            <Trophy className="w-96 h-96" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
