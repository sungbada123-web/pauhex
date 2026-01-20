'use client';

import { motion } from 'framer-motion';
import { Microscope, ShieldAlert, FileText, ClipboardCheck, Lock, Activity, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ClinicalSolution() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gray-50/50">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                                <Microscope className="w-3 h-3" /> Professional & Clinical Grade
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-light text-[#003366] leading-tight mb-8">
                                Redefining <span className="font-semibold">Patient Safety</span> Standards.
                            </h1>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl">
                                Built for the most demanding clinical environments. PAUHEX
                                Professional Solutions combine high-reliability hardware with
                                AI-enforced execution to eliminate medication errors at the source.
                            </p>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] transition-all rounded-sm inline-flex items-center gap-2"
                            >
                                Request Clinical Specs <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/clinical-hero.png"
                                alt="Clinical Care Solution"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Medical-Grade and Fail-Safe */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-light text-[#003366] mb-8">Medical-Grade <span className="font-semibold">by Design</span></h2>
                            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                                PAUHEX devices are engineered for 7x24 stability in resource-constrained
                                environments. Our "Fail-Safe" architecture ensures that in the event of power
                                failure or system anomaly, all medication remains physically locked and
                                protected until manual override by authorized personnel.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "EMC & Reliability", desc: "Hardened against electromagnetic interference for hospital environments." },
                                    { title: "Fault-Tolerant AI", desc: "Local rule engine operates independently of cloud connectivity." },
                                    { title: "Tamper-Proof Hardware", desc: "Electromagnetic physical locks with millisecond response times." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1"><ClipboardCheck className="w-5 h-5 text-[#179A97]" /></div>
                                        <div>
                                            <h4 className="font-semibold text-[#003366]">{item.title}</h4>
                                            <p className="text-sm text-gray-600 font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="aspect-square bg-gray-50 flex flex-col items-center justify-center p-8 text-center group">
                                <ShieldAlert className="w-12 h-12 text-[#179A97] mb-4 group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-semibold text-[#003366]">99.9%</span>
                                <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">Execution Accuracy</span>
                            </div>
                            <div className="aspect-square bg-[#003366] flex flex-col items-center justify-center p-8 text-center text-white group">
                                <Lock className="w-12 h-12 text-[#179A97] mb-4 group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-semibold">Fail-Safe</span>
                                <span className="text-xs uppercase tracking-widest text-white/50 mt-2 font-bold">Physical Lock</span>
                            </div>
                            <div className="aspect-square bg-[#179A97] flex flex-col items-center justify-center p-8 text-center text-white group">
                                <FileText className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-semibold">Audit</span>
                                <span className="text-xs uppercase tracking-widest text-white/50 mt-2 font-bold">Traceable Logs</span>
                            </div>
                            <div className="aspect-square bg-gray-50 flex flex-col items-center justify-center p-8 text-center group">
                                <Activity className="w-12 h-12 text-[#003366] mb-4 group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-semibold">6.0 TOPS</span>
                                <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">Edge NPU Power</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
