'use client';

import { Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function VisionPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20 overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-[2px]">
                            <Eye className="w-3 h-3" />
                            AI Safety
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-light text-[#003366] mb-6">
                            Pauhex <span className="font-semibold">Vision</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-light mb-8 max-w-lg">
                            AI-powered bathroom safety monitor. Detects slips and falls with privacy-first edge processing.
                        </p>
                        <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm mb-8">
                            <h3 className="font-bold text-[#003366] mb-2">Platform Preview</h3>
                            <p className="text-sm text-gray-500">Currently in closed beta with select partner institutions.</p>
                        </div>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#003366] text-white font-bold uppercase tracking-wider text-sm rounded-[2px]">
                            Request Beta Access <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[600px] bg-gray-50 rounded-lg overflow-hidden border border-gray-100 group shadow-2xl"
                    >
                        <Image
                            src="/images/vision.png"
                            alt="Pauhex Vision"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/10 to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
