'use client';

import { motion } from 'framer-motion';
import { Microscope, Brain, Database, Cpu, Activity, ShieldCheck, ArrowRight, FlaskConical, Beaker, FileText, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SciencePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[550px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                    <Image
                        src="/images/science-hero-v3.png"
                        alt="Science & Technology Background"
                        fill
                        className="object-cover opacity-20 transition-opacity duration-1000"
                    />
                </div>
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 bg-[#E6F0FF] text-[#003568] text-xs font-bold tracking-[0.3em] uppercase mb-10 rounded-sm">
                            Scientific Innovation
                        </div>
                        <h1 className="text-8xl font-light text-[#003568] mb-8 leading-tight">
                            Science <br />
                            <span className="font-semibold text-[#179A97]">& Technology</span>
                        </h1>
                        <p className="text-2xl text-[#555555] font-light max-w-3xl leading-relaxed">
                            PAUHEX combines cutting-edge AI algorithms with rigorous medical methodology.
                            Every development is rooted in deep scientific data and continuous clinical validation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Research Domains */}
            <section className="py-32">
                <div className="container">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-light text-[#003568] mb-6">Core Research Domains</h2>
                        <div className="h-1 w-20 bg-[#179A97] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {[
                            {
                                title: 'AI Medication Recognition',
                                segment: 'Researching deep learning systems for real-time identification and verification of diverse pharmaceutical forms.',
                                icon: <Brain className="w-8 h-8" />,
                                image: '/images/science-med-ai.png',
                                href: '/science/ai-med'
                            },
                            {
                                title: 'mmWave Radar Algorithms',
                                segment: 'Developing contactless fall detection and vital sign tracking algorithms tailored for senior physiological profiles.',
                                icon: <Activity className="w-8 h-8" />,
                                image: '/images/science-radar.png',
                                href: '/science/radar'
                            },
                            {
                                title: 'Health Predictive Models',
                                segment: 'Building long-cycle health trajectory models using big data to enable early intervention for potential health risks.',
                                icon: <Database className="w-8 h-8" />,
                                image: '/images/science-data.png',
                                href: '/science/data'
                            }
                        ].map((item, i) => (
                            <Link href={item.href} key={i} className="group block">
                                <div className="relative h-64 bg-[#F9FBFD] mb-10 overflow-hidden rounded-sm flex items-center justify-center text-gray-200 italic border">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#003568] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                </div>
                                <div className="px-2">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="text-[#179A97]">{item.icon}</div>
                                        <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#003568] border-b border-[#E2E8F0] pb-2 flex-grow">{item.title}</h3>
                                    </div>
                                    <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">{item.segment}</p>
                                    <div className="flex items-center gap-2 text-[#008080] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Technical Details <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scientific Publications */}
            <section className="py-32 bg-[#F9FBFD]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-20">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl font-light text-[#003568] mb-6">Scientific Publications</h2>
                            <p className="text-xl text-gray-600 font-light">
                                Our research results are regularly published in authoritative journals in smart healthcare, geriatrics, and AI.
                            </p>
                        </div>
                        <Link href="/science/publications" className="hidden lg:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#003568] hover:text-[#008080] transition-all pb-1 border-b-2 border-[#008080]">
                            View All Literature <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="space-y-12">
                        {[
                            { title: 'AI-Based Multi-Drug Verification Systems for Elderly Homecare', journal: 'HEALTHCARE TECHNOLOGY REVIEW', year: '2025', authors: 'James Paxton, Sarah Wilson, etc.' },
                            { title: 'Non-contact Fall Detection using 60GHz mmWave Radar in Senior Living', journal: 'IEEE JOURNAL OF BIOMEDICAL AND HEALTH INFORMATICS', year: '2024', authors: 'Wilson, S., et al.' },
                            { title: 'Predictive Modeling for Chronic Disease Management using Edge AI', journal: 'JOURNAL OF MEDICAL SYSTEMS', year: '2025', authors: 'Paxton, J., Liang, R.' }
                        ].map((pub, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col md:flex-row md:items-center justify-between p-10 bg-white hover:shadow-xl transition-all duration-500 rounded-sm"
                            >
                                <div className="max-w-3xl">
                                    <div className="text-xs font-bold text-[#008080] mb-3 tracking-widest uppercase">
                                        {pub.journal} | {pub.year}
                                    </div>
                                    <h4 className="text-2xl font-light text-[#003568] mb-4 group-hover:text-[#008080] transition-colors">{pub.title}</h4>
                                    <div className="text-gray-400 italic font-light">{pub.authors}</div>
                                </div>
                                <div className="mt-8 md:mt-0 flex gap-4">
                                    <button className="p-4 border border-[#EDF2F7] hover:border-[#003568] hover:text-[#003568] transition-all rounded-sm">
                                        <FileText className="w-5 h-5" />
                                    </button>
                                    <button className="p-4 border border-[#EDF2F7] hover:border-[#003568] hover:text-[#003568] transition-all rounded-sm">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scientific Partnerships */}
            <section className="py-32">
                <div className="container">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-light text-[#003568] mb-6">Global Scientific Partnerships</h2>
                        <div className="h-1 w-20 bg-[#179A97] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { name: 'MIT HEALTH SCIENCES', sub: 'Algorithm Development' },
                            { name: 'TSINGHUA AI LAB', sub: 'Neural Networks' },
                            { name: 'STANFORD BIO-DESIGN', sub: 'Clinical Validation' }
                        ].map((partner, i) => (
                            <div key={i} className="p-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-700 bg-[#F9FBFD] flex flex-col items-center justify-center border border-transparent hover:border-gray-100">
                                <div className="text-xl font-bold text-[#003568] tracking-widest mb-2">{partner.name}</div>
                                <div className="text-xs text-[#179A97] font-bold uppercase tracking-widest">{partner.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#003568] text-white overflow-hidden relative">
                <div className="container relative z-10 text-center">
                    <h2 className="text-5xl font-light mb-10">Join Our Research</h2>
                    <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
                        PAUHEX is committed to collaborating with world-leading institutions. If you are interested in
                        participating in our health technology research projects, please contact us.
                    </p>
                    <Link href="/contact" className="inline-block px-12 py-5 bg-[#179A97] text-white hover:bg-white hover:text-[#003568] transition-all shadow-xl font-bold uppercase tracking-widest text-sm rounded-sm">
                        Initiate Discussion
                    </Link>
                </div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#179A97] opacity-10 rounded-full blur-3xl"></div>
            </section>
        </div>
    );
}
