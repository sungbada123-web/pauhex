'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: 'Precision',
            description: 'AI algorithms at the core, pursuing extreme accuracy in every detail of dispensing and monitoring.',
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Human-Centric',
            description: 'Bringing care back to technology, providing a more dignified lifestyle for seniors.',
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: 'Innovation',
            description: 'Deep diving into mmWave radar and AI vision to develop smart solutions that truly understand seniors.',
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Security',
            description: 'Following rigorous medical-grade standards, ensuring privacy through localized edge computing.',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <Image
                        src="/images/team-v2.png"
                        alt="PAUHEX Innovation Team"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-6xl font-light text-[#003568] mb-8 tracking-tight text-shadow-md">
                            About PAUHEX
                        </h1>
                        <p className="text-2xl text-[#003568] font-light leading-relaxed max-w-3xl mx-auto">
                            We are a global smart health technology company, dedicated to reshaping senior health management
                            and medication safety through AI and advanced sensing technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-24">
                <div className="container">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-light text-[#003568] mb-8">
                            Our Mission
                        </h2>
                        <div className="max-w-3xl mx-auto text-[#555555] font-light text-lg leading-relaxed space-y-6">
                            <p>
                                Medication safety and stable vitals are the cornerstones of health. However, hundreds of millions of seniors worldwide face complex medication management and invisible daily safety risks.
                            </p>
                            <p>
                                PAUHEX develops AI-enforced dispensing algorithms and mmWave radar monitoring.
                                Our products aim to transform complex medical technology into a minimalist home experience.
                            </p>
                            <p>
                                We believe: Smart care should not be cold machine alerts, but silent protection�?                                safeguarding a quality life without changing daily habits.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#003568] text-white p-12 shadow-2xl rounded-sm text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-light mb-8 font-sans">Corporate Vision</h3>
                        <p className="text-xl font-light leading-relaxed opacity-90 italic">
                            &quot;To build a smart health hub that connects every home,
                            allowing every senior to enjoy a precise, safe, and dignified life under AI protection.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-[#F9FBFD]">
                <div className="container">
                    <h2 className="text-4xl font-medium text-[#003568] mb-16 text-center">
                        Core Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-10 text-center hover:shadow-xl transition-shadow duration-300 rounded-sm group"
                            >
                                <div className="w-16 h-16 bg-[#003568] flex items-center justify-center mx-auto mb-8 text-white rounded-sm group-hover:bg-[#179A97] transition-colors">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#003568] mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-[#555555] font-light leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24">
                <div className="container">
                    <h2 className="text-4xl font-medium text-[#003568] mb-6 text-center">
                        Our Team
                    </h2>
                    <p className="text-center text-[#555555] font-light text-xl mb-16 max-w-3xl mx-auto">
                        PAUHEX was founded by a team of experts in AI, hardware engineering, and geriatric medicine.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                name: 'Dr. James Paxton',
                                role: 'CEO & Founder',
                                background: 'AI Expert, Former Silicon Valley MedTech Architect',
                                image: '/images/team-james-paxton.png'
                            },
                            {
                                name: 'Sarah Wilson',
                                role: 'CTO',
                                background: 'Embedded Systems Expert, 20+ years in R&D',
                                image: '/images/team-sarah-wilson.png'
                            },
                            {
                                name: 'Dr. Rachel Liang',
                                role: 'Chief Scientist',
                                background: 'Integrative Medicine Specialist, Focus on Senior Care',
                                image: '/images/team-rachel-liang.png'
                            },
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-8 text-center hover:shadow-2xl transition-all rounded-sm group border-transparent border hover:border-gray-50">
                                <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700 bg-gray-100 flex items-center justify-center border">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-medium text-[#003568] mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-[#179A97] font-bold uppercase text-xs tracking-widest mb-4">{member.role}</p>
                                <p className="text-[#555555] font-light">{member.background}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Globalization */}
            <section className="py-20 bg-[#003568] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-light mb-8">
                        Global Vision, Localized Care
                    </h2>
                    <p className="text-2xl font-light leading-relaxed opacity-90">
                        PAUHEX combines world-leading AI algorithms with precision hardware engineering.
                        We stand by technical innovation to provide the most reliable, secure, and
                        intelligent health management solutions for homes and facilities worldwide.
                    </p>
                </div>
            </section>
        </div>
    );
}
