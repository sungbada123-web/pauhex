'use client';

import { motion } from 'framer-motion';
import { Activity, ArrowLeft, Wind, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ApneaSolutionPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/solutions" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Solutions
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                                Monitoring & Early Detection
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Sleep <br /><span className="font-semibold">Apnea</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Advanced respiratory tracking without masks or tubes. Our mmWave radar technology
                                detects micro-fluctuations in breathing patterns to provide medical-grade sleep apnea screenings.
                            </p>
                        </motion.div>
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/pauhex_apnea_monitoring.png"
                                alt="Apnea Solution"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                        {[
                            { title: 'Obstruction Detection', desc: 'Identifies specific airway events via sub-millimeter thoracic movement analysis.' },
                            { title: 'Oxygen Desat Correlation', desc: 'Syncs with pulse oximetry data to map desaturation events against sleep cycles.' },
                            { title: 'Physician Report', desc: 'Automatically generates a standardized PDF for clinical consultation.' }
                        ].map((item, i) => (
                            <div key={i} className="p-12 hover:shadow-xl transition-all duration-500 rounded-sm bg-white">
                                <h3 className="text-xl font-medium text-[#003568] mb-4">{item.title}</h3>
                                <p className="text-[#718096] font-light text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Authority Section */}
                    <div className="flex flex-col lg:flex-row items-center gap-20 py-24 border-t border-[#EDF2F7]">
                        <div className="lg:w-1/2 relative h-96 w-full rounded-sm overflow-hidden">
                            <Image src="/images/pauhex_apnea_monitoring.png" alt="PAUHEX Lab" fill className="object-cover" />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-light text-[#003568] mb-8 uppercase tracking-widest">Medical Accuracy</h2>
                            <p className="text-lg text-[#555555] font-light leading-relaxed mb-8">
                                Validated against Gold-Standard Polysomnography (PSG) at our Palo Alto research facility.
                                PAUHEX provides the confidence of a sleep lab in the privacy of your home.
                            </p>
                            <div className="flex items-center gap-4 text-[#179A97] text-[10px] font-bold uppercase tracking-[0.3em]">
                                <CheckCircle2 className="w-5 h-5" /> 99.8% Reliability Rate
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
