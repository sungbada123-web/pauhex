'use client';

import { motion } from 'framer-motion';
import { Brain, ArrowLeft, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function NeuralEntrainmentPage() {
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
                                Neurotechnology
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8">Neural Entrainment</h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Neural entrainment is the process of synchronizing brainwave frequencies with external
                                stimuli. VÖLTZMANN utilizes precise CES (Cranial Electrotherapy Stimulation) and
                                multi-sensory pulses to gently guide the brain into deep, restorative sleep states.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden bg-[#F9FBFD]">
                            <Image
                                src="/images/pauhex_neural_tech.png"
                                alt="Neural Entrainment"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-3xl font-light text-[#003568] mb-6 flex items-center gap-4">
                                    <Zap className="text-[#179A97]" /> Medical CES
                                </h3>
                                <p className="text-[#718096] font-light leading-relaxed">
                                    Our proprietary CES algorithms deliver micro-currents that modulate the production of
                                    neurotransmitters like serotonin and melatonin, effectively reducing anxiety and
                                    promoting natural sleep onset.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-light text-[#003568] mb-6 flex items-center gap-4">
                                    <Target className="text-[#179A97]" /> Frequency Following
                                </h3>
                                <p className="text-[#718096] font-light leading-relaxed">
                                    By mirroring the natural "spindles" and "K-complexes" of human sleep, our system
                                    physically entrains the brain to maintain longer periods of deep N3 and REM sleep.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
