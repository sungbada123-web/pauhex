'use client';

import { motion } from 'framer-motion';
import { Users, Globe, Building2, Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="pt-32 pb-24 bg-[#FF7E33] text-white">
                <div className="container text-center max-w-3xl">
                    <Users className="w-16 h-16 text-white mx-auto mb-8" />
                    <h1 className="text-4xl lg:text-7xl font-light mb-8">Global <span className="font-semibold">Partnership</span></h1>
                    <p className="text-xl text-white/80 font-light">Join the PAUHEX ecosystem to deliver life-saving execution intelligence at scale.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="p-12 border border-gray-100 hover:border-[#FF7E33] transition-all rounded-sm group">
                            <Building2 className="w-12 h-12 text-[#FF7E33] mb-8 group-hover:scale-110 transition-all" />
                            <h2 className="text-3xl font-light text-[#003366] mb-6">Institutional <span className="font-semibold">Partners</span></h2>
                            <p className="text-gray-600 font-light leading-relaxed mb-10">
                                For nursing facilities, hospitals, and senior living communities looking to modernize
                                their care workflows with AI-driven hardware.
                            </p>
                            <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-[#FF7E33] flex items-center gap-2">Become a Partner <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                        <div className="p-12 border border-gray-100 hover:border-[#179A97] transition-all rounded-sm group">
                            <Globe className="w-12 h-12 text-[#179A97] mb-8 group-hover:scale-110 transition-all" />
                            <h2 className="text-3xl font-light text-[#003366] mb-6">Distributor <span className="font-semibold">Network</span></h2>
                            <p className="text-gray-600 font-light leading-relaxed mb-10">
                                For global medical equipment distributors looking to bring sub-millimeter
                                radar and safety dispensers to new markets.
                            </p>
                            <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-[#179A97] flex items-center gap-2">Join Distribution <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
