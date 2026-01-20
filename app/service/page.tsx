'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Download, GraduationCap, Users, ShieldCheck, ArrowRight, MessageSquare, Cloud } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceHub() {
    const services = [
        {
            icon: <HelpCircle className="w-8 h-8" />,
            title: "Help Center",
            desc: "Comprehensive guides and FAQs for all Pauhex products and software solutions.",
            href: "/service/help"
        },
        {
            icon: <Download className="w-8 h-8" />,
            title: "Downloads",
            desc: "Access the latest user manuals, clinical reports, and firmwares for your devices.",
            href: "/service/downloads"
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Training",
            desc: "Professional training modules for community staff and medical providers.",
            href: "/service/training"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Partners",
            desc: "Information for distributors and care institutions looking to join our network.",
            href: "/service/partners"
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Warranty",
            desc: "Register your products and manage service plans and hardware protection.",
            href: "/service/warranty"
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Pauhex Cloud",
            desc: "The central health management platform for seniors and care teams.",
            href: "/service/cloud"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-12 pb-24 overflow-hidden bg-gray-50">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-light text-[#003366] leading-tight mb-8">
                                Professional <span className="font-semibold text-[#179A97]">Support.</span>
                            </h1>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl">
                                We're committed to your long-term success. Access our global
                                service ecosystem for technical support, training, and
                                clinical resources.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] transition-all rounded-sm inline-flex items-center gap-2 shadow-lg"
                                >
                                    Get Immediate Help <ArrowRight className="w-4 h-4" />
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
                                src="/images/service-hero.png"
                                alt="Service and Support"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Grid */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <Link
                                key={i}
                                href={service.href}
                                className="p-10 bg-gray-50 border border-transparent hover:border-[#179A97]/30 hover:bg-white hover:shadow-xl transition-all group"
                            >
                                <div className="text-[#179A97] mb-8 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-[#003366] mb-4">{service.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed mb-8">{service.desc}</p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#003366]">Go to {service.title} <ArrowRight className="w-3 h-3" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
