'use client';

import { motion } from 'framer-motion';
import { Microscope, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ClinicalTrialsPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/science" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Science
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div>
                            <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                                Clinical Validation
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8">Clinical Trials</h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                VÖLTZMANN products are subject to rigorous clinical validation. We collaborate with leading
                                university hospitals and sleep clinics globally to ensure the highest standards of efficacy and safety.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden bg-[#F9FBFD]">
                            <Image
                                src="/images/pauhex_clinical_trials_realism.png"
                                alt="Clinical Trials"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-32">
                        {[
                            {
                                id: 'VT-402',
                                title: 'CES Efficacy in Chronic Insomnia',
                                status: 'Completed',
                                lead: 'Stanford Medical Center',
                                date: '2024',
                                results: '84% of participants reported a significant reduction in sleep onset latency (SOL).'
                            },
                            {
                                id: 'VT-509',
                                title: 'Non-contact Radar vs. Polysomnography',
                                status: 'Ongoing',
                                lead: 'UCSF Medical Center',
                                date: '2024-2025',
                                results: 'Current correlation coefficient of 0.98 for respiratory rate and heart rate monitoring.'
                            }
                        ].map((trial, i) => (
                            <div key={i} className="bg-[#F9FBFD] p-16 rounded-sm">
                                <div className="flex flex-col md:flex-row justify-between mb-12 border-b border-[#E2E8F0] pb-8">
                                    <div>
                                        <div className="text-xs font-bold text-[#179A97] mb-2 uppercase tracking-widest">{trial.id}</div>
                                        <h3 className="text-3xl font-light text-[#003568]">{trial.title}</h3>
                                    </div>
                                    <div className="mt-4 md:mt-0 text-right">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#179A97] text-xs font-bold uppercase rounded-sm border border-[#E2E8F0]">
                                            <span className="w-2 h-2 rounded-full bg-[#179A97]"></span>
                                            {trial.status}
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                    <div>
                                        <h4 className="text-[10px] font-bold text-[#A0AEC0] uppercase tracking-widest mb-4">Investigator</h4>
                                        <p className="text-[#2D3748] font-medium">{trial.lead}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold text-[#A0AEC0] uppercase tracking-widest mb-4">Duration</h4>
                                        <p className="text-[#2D3748] font-medium">{trial.date}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold text-[#A0AEC0] uppercase tracking-widest mb-4">Key Results</h4>
                                        <p className="text-[#718096] font-light leading-relaxed">{trial.results}</p>
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
