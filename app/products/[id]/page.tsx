'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import {
    Zap, Brain, Activity, CheckCircle2,
    ShieldCheck, Cpu, Database, Pill,
    Radar, ArrowRight, Clock, FileText, Share2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-light text-[#003568] mb-4">Product Not Found</h1>
                    <Link href="/products" className="text-[#179A97] hover:underline">Return to Product List</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative h-[85vh] min-h-[700px] bg-[#F4F7F9] overflow-hidden flex items-center pt-20">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-[2px]">
                                {product.category === 'Medication' ? 'Medical Grade AI' : 'Advanced Health Hub'}
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-light text-[#003366] leading-[1.1] mb-10">
                                {product.name.split(' ')[0]} <span className="font-semibold">{product.name.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p className="text-xl text-[#5A6A85] font-light leading-relaxed mb-12 max-w-xl">
                                {product.tagline}
                                <br />
                                {product.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#179A97] transition-all rounded-[2px] inline-flex items-center gap-2"
                                >
                                    Request a Quote
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="#specs"
                                    className="px-8 py-4 bg-white text-[#4A5568] text-sm font-bold uppercase tracking-wider hover:bg-[#E2E8F0] hover:text-[#003366] transition-all rounded-[2px] shadow-sm"
                                >
                                    Technical Specs
                                </Link>
                            </div>
                        </motion.div>

                        {/* Hero Image / Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] w-full bg-white/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
                {/* Background Element */}
                <div
                    className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-20"
                    style={{ background: `radial-gradient(circle at center, ${product.color}, transparent)` }}
                ></div>
            </section>

            {/* 2. CORE FEATURES */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-light text-[#003366] mb-6 border-b-2 border-[#179A97] pb-4 inline-block">
                            Core <span className="font-semibold">Features</span>
                        </h2>
                        <p className="text-lg text-[#718096] font-light leading-relaxed mt-6">
                            PAUHEX {product.name} integrates proprietary AI algorithms with precision sensing technology,
                            specifically designed to improve senior quality of life and medication safety.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {product.features.map((feature, i) => (
                            <div key={i} className="p-8 bg-[#F8FAFB] hover:bg-white hover:shadow-xl transition-all duration-300 rounded-[2px] group">
                                <div className="w-12 h-12 bg-white flex items-center justify-center text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-all mb-6 rounded-sm shadow-sm">
                                    {i === 0 ? <Zap className="w-6 h-6" /> : i === 1 ? <Cpu className="w-6 h-6" /> : i === 2 ? <ShieldCheck className="w-6 h-6" /> : <Activity className="w-6 h-6" />}
                                </div>
                                <h3 className="text-lg font-semibold text-[#2D3748] mb-4">{feature}</h3>
                                <p className="text-[#718096] text-sm font-light leading-relaxed">
                                    Deeply optimized based on medical-grade standards, ensuring stability and precision in diverse environments.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL SPECS */}
            <section id="specs" className="py-24 bg-[#F9FBFD]">
                <div className="container">
                    <h2 className="text-3xl font-light text-[#003366] mb-16 text-center">Technical Specifications</h2>

                    <div className="bg-white p-12 shadow-sm rounded-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
                            {product.specs.map((spec, i) => (
                                <div key={i} className="flex justify-between py-4 border-b border-gray-100 items-baseline">
                                    <dt className="text-[#718096] font-light">{spec.label}</dt>
                                    <dd className="text-[#2D3748] font-semibold">{spec.value}</dd>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-20 bg-[#003366] text-white">
                <div className="container">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
                        <div>
                            <h2 className="text-3xl font-light mb-4 text-white">Resources & Support</h2>
                            <p className="text-white/70 font-light max-w-xl">
                                Access clinical validation reports, user manuals, and compliance documentation for PAUHEX {product.name}.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-white/10 hover:bg-white hover:text-[#003366] transition-all rounded-sm text-sm uppercase tracking-widest font-bold border border-white/20">
                                User Manual (PDF)
                            </button>
                            <button className="px-6 py-3 bg-[#179A97] text-white hover:bg-white hover:text-[#179A97] transition-all rounded-sm text-sm uppercase tracking-widest font-bold">
                                Clinical Data
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
