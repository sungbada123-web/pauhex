'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Home, Zap, Pill, Activity, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeCareSolution() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gray-50">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                                <Home className="w-3 h-3" /> Solutions for Home
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-light text-[#003366] leading-tight mb-8">
                                Dignified <span className="font-semibold">Independence</span> at Home.
                            </h1>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl">
                                Transform your living space into a proactive health ecosystem.
                                Our AI-driven home solutions ensure medication adherence and constant
                                vital sign monitoring without intruding on daily life.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] transition-all rounded-sm inline-flex items-center gap-2"
                                >
                                    Consult for Home Care <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/home-care-hero.png"
                                alt="Home Care Solution"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <ShieldCheck className="w-8 h-8" />,
                                title: "Medication Safety",
                                desc: "No more guesswork or missed doses. Our physical locking mechanism ensures the right medicine at the right time."
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "Peace of Mind",
                                desc: "Real-time updates for family members. Know that your loved ones are safe and healthy, even when you aren't there."
                            },
                            {
                                icon: <Activity className="w-8 h-8" />,
                                title: "Proactive Health",
                                desc: "Contactless sensors detect falls and vital sign changes before they become emergencies."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 border border-gray-100 rounded-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="text-[#179A97] mb-6">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-[#003366] mb-4">{item.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology in Action */}
            <section className="py-24 bg-[#003366] text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-3xl lg:text-4xl font-light mb-6">Execution <span className="font-semibold">Intelligence</span></h2>
                        <p className="text-white/70 font-light text-lg">
                            We don't just "remind". We "execute". Our AI-hardware synergy removes human error from the care loop.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-6 h-6 text-[#179A97]" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">Automated Dispensing</h4>
                                    <p className="text-white/60 font-light">32 independent channels managed by an AI rule engine to handle complex multi-drug schedules.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-[#179A97]" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">Physical Locking</h4>
                                    <p className="text-white/60 font-light">Proprietary electromagnetic locks ensure only the correct medication is accessible at the correct time.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center flex-shrink-0">
                                    <Activity className="w-6 h-6 text-[#179A97]" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">Non-Intrusive Monitoring</h4>
                                    <p className="text-white/60 font-light">mmWave radar technology tracks heart rate and respiratory rate without cameras or wearables.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] bg-white/5 rounded-sm flex items-center justify-center border border-white/10 p-12">
                            <div className="text-center">
                                <Activity className="w-24 h-24 text-[#179A97] mx-auto mb-8 opacity-50" />
                                <p className="text-xl font-light italic">"PAUHEX has redefined how we care for our parents from a distance."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
