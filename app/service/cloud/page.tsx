'use client';

import { motion } from 'framer-motion';
import { Cloud, ShieldCheck, Zap, Globe, ArrowRight, Share2, Database } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PauhexCloud() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#003366] text-white">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#179A97] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                                <Cloud className="w-3 h-3" /> Managed Health Ecosystem
                            </div>
                            <h1 className="text-5xl lg:text-Long font-light text-white leading-tight mb-8">
                                Pauhex <span className="font-semibold text-[#179A97]">Cloud Platform.</span>
                            </h1>
                            <p className="text-xl text-white/60 font-light leading-relaxed mb-10 max-w-xl">
                                The central nervous system for senior digital health. Our secure
                                cloud platform aggregates data from Pro-Dispense and Vital-Radar,
                                providing actionable insights for families and care teams.
                            </p>
                            <div className="flex gap-4">
                                <button className="px-8 py-4 bg-[#179A97] text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#003366] transition-all rounded-sm shadow-lg">
                                    Request Access
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] border border-white/10 rounded-sm overflow-hidden bg-[#002855] group"
                        >
                            <Image
                                src="/images/pauhex-cloud-v1.png"
                                alt="Pauhex Cloud Platform"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Platform Features */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Database className="w-10 h-10" />,
                                title: "Real-time Sync",
                                desc: "Instant synchronization between home devices and mobile interfaces, ensuring caregivers are always informed."
                            },
                            {
                                icon: <ShieldCheck className="w-10 h-10" />,
                                title: "HIPAA Compliant",
                                desc: "Medical-grade security standards with end-to-end encryption for all health and physiological data."
                            },
                            {
                                icon: <Globe className="w-10 h-10" />,
                                title: "Institutional Portal",
                                desc: "Dedicated dashboard for senior living communities to manage thousands of residents simultaneously."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="group p-10 bg-gray-50 border border-transparent hover:border-[#179A97]/30 hover:bg-white transition-all">
                                <div className="text-[#003366] mb-8 group-hover:text-[#179A97] transition-colors">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-[#003366] mb-4">{feature.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
