'use client';

import { motion } from 'framer-motion';
import { Users, Building2, LayoutGrid, Zap, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CommunitySolution() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#F8FAFB]">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                                <Users className="w-3 h-3" /> Community & Facility Solutions
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-light text-[#003366] leading-tight mb-8">
                                Scaling Care with <span className="font-semibold">Precision.</span>
                            </h1>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl">
                                Empower your senior living community or professional care facility with
                                PAUHEX's distributed AI architecture. Manage hundreds of residents with
                                zero error fatigue and centralized safety oversight.
                            </p>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] transition-all rounded-sm inline-flex items-center gap-2"
                            >
                                Get Enterprise Demo <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/community-hero.png"
                                alt="Community Care Solution"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Distributed Intelligence */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-light text-[#003366] mb-6">Distributed <span className="font-semibold">AI Architecture</span></h2>
                        <p className="text-lg text-gray-600 font-light">
                            Harness the power of local RK3588 computing nodes in every room,
                            linked by a secure facility-wide cloud for total situational awareness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Building2 className="w-8 h-8" />,
                                title: "Facility-Wide Oversight",
                                desc: "Centralized dashboard for nurses and caregivers to monitor medication compliance and vital signs across entire wings."
                            },
                            {
                                icon: <LayoutGrid className="w-8 h-8" />,
                                title: "Modular Scaling",
                                desc: "Plug-and-play architecture allows for easy expansion from 10 rooms to 1,000 without overloading network infrastructure."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8" />,
                                title: "Regulatory Compliance",
                                desc: "Comprehensive audit trails for every physical interaction, ensuring 100% adherence to safety protocols."
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

            {/* Performance Stats */}
            <section className="py-24 bg-[#003366] text-white">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { value: "99%+", label: "Compliance Accuracy" },
                            { value: "32", label: "Channels per Resident" },
                            { value: "0ms", label: "Local Latency" },
                            { value: "24/7", label: "Proactive Defense" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl lg:text-6xl font-semibold text-[#179A97] mb-4">{stat.value}</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-white/50">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
