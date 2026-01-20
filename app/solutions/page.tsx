'use client';

import { motion } from 'framer-motion';
import { Pill, Activity, Heart, Moon, Home, Building2, Hospital, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SolutionsPage() {
    const solutions = [
        {
            title: 'By Application Scenario',
            image: '/images/solutions-home-care-v2.png',
            items: [
                { name: 'Home Care', icon: <Home className="w-5 h-5" />, desc: 'AI-enforced smart dispensing and health monitoring for individuals.' },
                { name: 'Community Hub', icon: <Building2 className="w-5 h-5" />, desc: 'Multi-user dispensing management and periodic vital sign analysis.' },
                { name: 'Professional Institution', icon: <Hospital className="w-5 h-5" />, desc: 'Integrated platform to enhance digital management efficiency for care facilities.' },
                { name: 'Ambient Adaptation', icon: <ShieldCheck className="w-5 h-5" />, desc: 'Smart spatial sensing and automated emergency response protocols.' },
            ]
        },
        {
            title: 'By Core Need',
            image: '/images/solutions-facility-v2.png',
            items: [
                { name: 'High-Risk Medication', icon: <Pill className="w-5 h-5" />, desc: 'Precision dispensing and tracking for complex multiple-drug prescriptions.' },
                { name: 'Chronic Monitoring', icon: <Activity className="w-5 h-5" />, desc: 'Contactless vital tracking with real-time alerts for anomalies.' },
                { name: 'Sleep & Autonomic Care', icon: <Moon className="w-5 h-5" />, desc: 'Rhythmic intervention and bio-feedback to enhance sleep quality.' },
                { name: 'Health Data Insights', icon: <Heart className="w-5 h-5" />, desc: 'AI-driven health trajectory analysis and predictive wellness models.' },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="pt-12 pb-20 bg-gray-50">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">
                            Customized <br />
                            <span className="font-semibold text-[#179A97]">Smart Care Pathways.</span>
                        </h1>
                        <p className="text-xl text-[#555555] font-light max-w-2xl leading-relaxed">
                            PAUHEX solutions seamlessly integrate high-precision diagnostics and intelligent management,
                            providing a trusted digital health loop for diverse user groups and health challenges.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="space-y-32">
                        {solutions.map((group, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="w-full lg:w-1/2">
                                    <div className="relative h-[400px] w-full rounded-sm overflow-hidden shadow-xl border border-gray-100">
                                        <Image
                                            src={group.image}
                                            alt={group.title}
                                            fill
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-10 border-b pb-4">{group.title}</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {group.items.map((item, i) => (
                                            <div key={i} className="p-8 bg-gray-50/50 hover:shadow-lg hover:bg-white transition-all group rounded-sm border border-transparent hover:border-gray-100">
                                                <div className="w-10 h-10 flex items-center justify-center bg-white shadow-sm rounded-sm text-[#003568] group-hover:bg-[#003568] group-hover:!text-white transition-all mb-6">
                                                    {item.icon}
                                                </div>
                                                <h4 className="text-xl font-medium text-gray-800 mb-3">{item.name}</h4>
                                                <p className="text-gray-600 text-sm font-light mb-6 leading-relaxed">{item.desc}</p>
                                                <Link href="/contact" className="text-xs font-bold text-[#003568] uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all hover:text-[#008080]">
                                                    Learn More <ArrowRight className="w-3 h-3" />
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
