'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Share2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PressPage() {
    return (
        <div className="min-h-screen bg-white text-[#003366]">
            <section className="pt-32 pb-12 bg-[#F8FAFB]">
                <div className="container">
                    <h1 className="text-4xl lg:text-5xl font-light mb-4">Press <span className="font-semibold">Room</span></h1>
                    <p className="text-xl text-gray-500 font-light">Resources, media kits, and official inquiries.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <h2 className="text-2xl font-semibold mb-8 border-b-2 border-[#179A97] pb-4 inline-block">Press Releases</h2>
                            {[
                                "Pauhex Pro-Dispense Commercial Launch",
                                "AI Architecture for Elder Privacy and Security",
                                "Strategic Partnership for Smart Care Communities",
                                "Global Brand Identity Reveal"
                            ].map((p, i) => (
                                <div key={i} className="flex justify-between items-center group cursor-pointer py-4 border-b border-gray-100 hover:border-[#179A97] transition-colors">
                                    <div className="flex items-center gap-4">
                                        <FileText className="w-5 h-5 text-[#179A97]" />
                                        <span className="font-light hover:text-[#179A97] transition-colors">{p}</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#179A97] transform group-hover:translate-x-1 transition-all" />
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#003366] text-white p-12 rounded-sm shadow-xl">
                            <div className="relative aspect-video mb-8 rounded-sm overflow-hidden border border-white/10">
                                <Image
                                    src="/images/about/media-kit.png"
                                    alt="Pauhex Media Kit"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-semibold mb-8">Media Kit</h2>
                            <p className="text-white/60 font-light mb-12">Download our official logo assets, product photography, and executive bios for editorial use.</p>
                            <div className="space-y-6">
                                <button className="w-full py-4 border border-white/20 hover:bg-white hover:text-[#003366] transition-all flex items-center justify-between px-6 rounded-sm uppercase tracking-widest text-sm font-bold">
                                    <span>Brand Assets (ZIP)</span>
                                    <Download className="w-4 h-4" />
                                </button>
                                <button className="w-full py-4 border border-white/20 hover:bg-white hover:text-[#003366] transition-all flex items-center justify-between px-6 rounded-sm uppercase tracking-widest text-sm font-bold">
                                    <span>Press Kit PDF</span>
                                    <Download className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="mt-12 pt-12 border-t border-white/10 flex items-center justify-between">
                                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">Inquiries</span>
                                <a href="mailto:press@pauhex.com" className="text-[#179A97] hover:underline font-bold">press@pauhex.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
