'use client';

import { motion } from 'framer-motion';
import { Database, TrendingUp, ShieldCheck, Activity, Share2, Search, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DataResearch() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gray-50">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                                <Database className="w-3 h-3" /> Predictive Health Analytics
                            </div>
                            <h1 className="text-5xl lg:text-Long font-light text-[#003366] leading-tight mb-8">
                                Longitudinal <span className="font-semibold text-[#179A97]">Health Models.</span>
                            </h1>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl">
                                Moving from reactive care to predictive intelligence. Our research
                                leverages years of anonymized physical and physiological data to
                                build models that detect early-stage health decline before clinical
                                symptoms manifest.
                            </p>
                            <Link
                                href="/science"
                                className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] transition-all rounded-sm inline-flex items-center gap-2"
                            >
                                Research Overview <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/research-data-hero.png"
                                alt="Longitudinal Health Data Research"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Predictive Intelligence */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-light text-[#003366] mb-6">Execution <span className="font-semibold">Insights</span></h2>
                        <p className="text-lg text-gray-600 font-light">
                            We don't just collect data. We build actionable intelligence that
                            supports clinicians and family members in proactive decision-making.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: "Trend Analysis",
                                desc: "Identifying subtle changes in sleep architecture, medication adherence patterns, and respiratory stability over months and years."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8" />,
                                title: "Anonymized & Secure",
                                desc: "All data modeling is performed on encrypted, de-identified datasets, adhering to stringent global healthcare privacy standards."
                            },
                            {
                                icon: <Share2 className="w-8 h-8" />,
                                title: "Clinician Integration",
                                desc: "Seamlessly export longitudinal reports to EHR systems, providing doctors with a continuous view of a patient's home-based health."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
                                <div className="text-[#179A97] mb-8 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
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
