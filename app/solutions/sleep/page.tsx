'use client';

import { motion } from 'framer-motion';
import { Moon, Zap, ShieldCheck, Heart, Activity, Waves, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SleepSolution() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#0F172A] text-white">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#179A97] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                                <Moon className="w-3 h-3" /> Bio-Rhythmic Sleep Science
                            </div>
                            <h1 className="text-5xl lg:text-Long font-light text-white leading-tight mb-8">
                                Restorative Sleep, <span className="font-semibold text-[#179A97]">Science-Backed.</span>
                            </h1>
                            <p className="text-xl text-white/60 font-light leading-relaxed mb-10 max-w-xl">
                                Harmonize your body's natural rhythms with the Pauhex Bio-Link.
                                Using haptic resonance and infrared heat therapy, we guide
                                autonomic regulation for deep, restorative rest.
                            </p>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-[#179A97] text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#003366] transition-all rounded-sm inline-flex items-center gap-2"
                            >
                                Experience Better Sleep <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl border border-white/5"
                        >
                            <Image
                                src="/images/sleep-hero.png"
                                alt="Smart Sleep Solution"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
                {/* Subtle Glow */}
                <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-[#179A97]/5 blur-[120px] -z-10 rounded-full"></div>
            </section>

            {/* Non-Invasive Intervention */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-light text-[#003366] mb-6">Autonomic <span className="font-semibold">Regulation</span></h2>
                        <p className="text-lg text-gray-600 font-light">
                            Moving beyond mere tracking. The PAUHEX Bio-Link acts as a proactive
                            intervention tool to help seniors achieve 0.1Hz low-frequency resonance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Waves className="w-8 h-8" />,
                                title: "Haptic Guidance",
                                desc: "Dual linear motors provide subtle rhythmic feedback that guides breathing into a therapeutic, low-frequency pattern."
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Infrared Therapy",
                                desc: "Graphene-based constant 37°C heat therapy improves blood circulation and relaxes peripheral nerves."
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "HRV Optimization",
                                desc: "Real-time analysis of heart rate variability triggers adaptive intervention sequences to lower stress levels."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-gray-100 rounded-sm hover:border-[#179A97]/30 transition-all">
                                <div className="text-[#179A97] mb-6">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-[#003366] mb-4">{item.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
