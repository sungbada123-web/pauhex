'use client';

import { motion } from 'framer-motion';
import { Moon, ArrowLeft, ShieldCheck, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function InsomniaSolutionPage() {
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
                                Clinical Solution
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Chronic <br /><span className="font-semibold">Insomnia</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Break the cycle of sleeplessness through neurological synchronization. Our non-pharmacological
                                approach combines medical-grade CES with adaptive sensory modulation.
                            </p>
                            <ul className="space-y-4">
                                {['Reduces Sleep Onset Latency', 'Prolongs Deep Sleep Duration', 'Zero Side Effects', 'Clinically Validated'].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#179A97] font-medium">
                                        <ShieldCheck className="w-5 h-5" /> {feat}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/pauhex_insomnia_cure.png"
                                alt="Insomnia Solution"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="py-24 bg-[#F9FBFD] px-16 rounded-sm mb-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                            <div className="relative h-80 overflow-hidden rounded-sm">
                                <Image src="/images/pauhex_staff_clinical.png" alt="Clinical Staff" fill className="object-cover" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-light text-[#003568] mb-6">Expert Guidance</h2>
                                <p className="text-[#718096] font-light leading-relaxed mb-8">
                                    Our clinical team at PAUHEX specializes in neuro-modulation techniques
                                    specifically designed for chronic insomnia patients who have not responded to
                                    traditional behavioral therapy.
                                </p>
                                <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-[#179A97] border-b-2 border-[#179A97] pb-1">
                                    Consult our Experts
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
