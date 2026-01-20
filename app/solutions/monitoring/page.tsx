'use client';

import { motion } from 'framer-motion';
import { Radar, EyeOff, ShieldCheck, Activity, BellRing, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MonitoringSolution() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#F1F5F9]">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                                <Radar className="w-3 h-3" /> Contactless Chronic Care
                            </div>
                            <h1 className="text-5xl lg:text-Long font-light text-[#003366] leading-tight mb-8">
                                Proactive Health <span className="font-semibold">Without Intrusions.</span>
                            </h1>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl">
                                Monitor respiration, heart rate, and fall detection with 60GHz mmWave
                                technology. No cameras. No wearables. No loss of privacy.
                                Just continuous, medical-grade situational awareness.
                            </p>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] transition-all rounded-sm inline-flex items-center gap-2"
                            >
                                Inquire About Vital-Radar <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/monitoring-hero.png"
                                alt="Chronic Monitoring Solution"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Privacy-First Monitoring */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <EyeOff className="w-8 h-8" />,
                                title: "Total Privacy",
                                desc: "Unlike cameras, mmWave radar detects movement and vitals through point-cloud data, keeping the user's visual identity completely private."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8" />,
                                title: "Fall Detection",
                                desc: "Instant AI alerts for fall events, posture changes, or prolonged inactivity, ensuring rapid response when it matters most."
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "Vital Sign Tracking",
                                desc: "Continuous, medical-grade monitoring of heart rate and respiratory rate patterns to detect long-term health trends."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 group hover:bg-gray-50 transition-colors rounded-sm">
                                <div className="text-[#179A97] mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-[#003366] mb-4">{item.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Edge */}
            <section className="py-24 bg-[#003366] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#179A97]/10 -skew-x-12 transform translate-x-1/2"></div>
                <div className="container relative z-10">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl lg:text-4xl font-light mb-12">The <span className="font-semibold">60GHz Advantage</span></h2>
                        <div className="space-y-10">
                            <div className="flex gap-6">
                                <Activity className="w-10 h-10 text-[#179A97] flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">Micromotion Detection</h4>
                                    <p className="text-white/60 font-light">Sub-millimeter sensitivity allows for accurate heart rate and chest wall movement tracking through clothing and bedding.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <BellRing className="w-10 h-10 text-[#179A97] flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">Zero-Latency Alerts</h4>
                                    <p className="text-white/60 font-light">Localized AI processing on the distributed gateway ensures instant alert generation without waiting for cloud round-trips.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
