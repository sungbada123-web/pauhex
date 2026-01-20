'use client';

import { motion } from 'framer-motion';
import { Pill, ShieldCheck, Clock, AlertTriangle, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MedicationSolution() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-white">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                                <Pill className="w-3 h-3" /> Targeted Safety Solutions
                            </div>
                            <h1 className="text-5xl lg:text-Long font-light text-[#003366] leading-tight mb-8">
                                Eliminating <span className="font-semibold">Human Error</span> in Medication.
                            </h1>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl">
                                90% of medication errors happen during administration.
                                PAUHEX combines AI rule parsing with physical execution
                                to ensure the right dose, for the right resident, at the
                                absolute right time.
                            </p>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] transition-all rounded-sm inline-flex items-center gap-2"
                            >
                                Learn About Fail-Safe <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/medication-hero.png"
                                alt="Medication Safety Solution"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Executing Intelligence? */}
            <section className="py-24 bg-gray-50">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-video bg-[#003366] rounded-sm flex items-center justify-center p-12 overflow-hidden group">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#179A97_0%,transparent_70%)] group-hover:scale-150 transition-transform duration-1000"></div>
                            <div className="relative text-center">
                                <ShieldCheck className="w-20 h-20 text-[#179A97] mx-auto mb-6" />
                                <h3 className="text-3xl font-light text-white italic">"Physical locking is the only true safety net."</h3>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-Long font-light text-[#003366] mb-8">Beyond <span className="font-semibold">Simple Reminders</span></h2>
                            <p className="text-lg text-gray-600 font-light mb-10">
                                Traditional pillboxes and apps rely on human memory.
                                PAUHEX uses "Execution Intelligence" to close the loop.
                                If the time isn't right, or the sequence is wrong, the
                                medication remains physically inaccessible.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: <Clock className="w-5 h-5" />, title: "Precision Timing", text: "Minute-level release windows." },
                                    { icon: <AlertTriangle className="w-5 h-5" />, title: "Wrong Drug Defense", text: "Prevents accidental cross-dosing." },
                                    { icon: <CheckCircle2 className="w-5 h-5" />, title: "Verified Intake", text: "Senors confirm the cup was taken." },
                                    { icon: <Zap className="w-5 h-5" />, title: "AI Rule Engine", text: "Parse complex doctor scripts." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-sm hover:shadow-md transition-shadow">
                                        <div className="text-[#179A97]">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#003366] uppercase tracking-wider">{item.title}</h4>
                                            <p className="text-xs text-gray-500 font-light mt-1">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
