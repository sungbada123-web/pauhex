'use client';

import { motion } from 'framer-motion';
import { Wind, ArrowLeft, Activity, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AnxietySolutionPage() {
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
                                Cognitive Relief
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Anxiety & <br /><span className="font-semibold">Sleep Relief</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Quiet the mind, soothe the body. Our specialized anxiety relief protocols use multi-modal
                                sensory synchronization to lower cortisol levels and facilitate rapid sleep onset.
                            </p>
                        </motion.div>
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/pauhex_sleep_research.png" // Deep focus calm environment
                                alt="Anxiety Solution"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                        <div className="p-12 bg-[#F9FBFD] border-l-4 border-[#179A97] rounded-sm">
                            <h3 className="text-2xl font-light text-[#003568] mb-6">Parasympathetic Activation</h3>
                            <p className="text-[#718096] font-light leading-relaxed">
                                By guiding the breath and heart rate through subtle haptic and sound cues, we trigger the
                                body's natural "rest and digest" state within minutes of bed entry.
                            </p>
                        </div>
                        <div className="p-12 bg-[#F9FBFD] border-l-4 border-[#179A97] rounded-sm">
                            <h3 className="text-2xl font-light text-[#003568] mb-6">Cognitive Offloading</h3>
                            <p className="text-[#718096] font-light leading-relaxed">
                                Our software protocols help users disconnect from the stressors of the day, using
                                validated neural entrainment to shift brainwave frequencies toward Delta.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
