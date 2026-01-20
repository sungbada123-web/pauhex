'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Globe, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="pt-32 pb-24 bg-[#003366] text-white">
                <div className="container text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#179A97] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                            <Sparkles className="w-3 h-3" /> Join the Mission
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-light mb-8">Build the Future of <span className="font-semibold text-[#179A97]">Care.</span></h1>
                        <p className="text-xl text-white/60 font-light">
                            We are looking for visionary engineers, AI researchers, and
                            empathetic designers to help us build intelligence that executes.
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="container mt-16 max-w-6xl -mb-32 relative z-10"
                >
                    <div className="relative aspect-[21/9] rounded-lg overflow-hidden shadow-2xl border border-white/10">
                        <Image
                            src="/images/about/careers-team.png"
                            alt="Pauhex Research Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </section>

            <section className="py-24">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-light text-[#003366] mb-12">Open <span className="font-semibold">Positions</span></h2>
                        <div className="space-y-8">
                            {[
                                { title: "Senior AI Researcher (Computer Vision)", location: "Remote / U.S.", type: "Full-Time" },
                                { title: "Hardware Systems Engineer", location: "Hainan, China", type: "Full-Time" },
                                { title: "Product Designer (Healthcare focus)", location: "Remote", type: "Full-Time" },
                                { title: "Longitudinal Data Scientist", location: "Hainan / Remote", type: "Contract" }
                            ].map((job, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="p-8 border border-gray-100 hover:border-[#179A97] flex flex-col md:flex-row justify-between items-center gap-8 group cursor-pointer transition-colors"
                                >
                                    <div>
                                        <h3 className="text-xl font-bold text-[#003366] mb-2">{job.title}</h3>
                                        <div className="flex gap-6 text-sm text-gray-500 font-light">
                                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</span>
                                            <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {job.type}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#179A97] font-bold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                        Apply Now <ArrowRight className="w-4 h-4" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="container text-center max-w-2xl">
                    <h2 className="text-2xl font-semibold text-[#003366] mb-6">Don't see a perfect match?</h2>
                    <p className="text-gray-600 font-light mb-12">We are always looking for exceptional talent. If you believe in the power of execution intelligence, reach out to us directly.</p>
                    <a href="mailto:careers@pauhex.com" className="px-12 py-5 bg-[#003366] text-white uppercase tracking-widest font-bold text-sm hover:bg-[#179A97] transition-all rounded-sm inline-block shadow-lg">Send Open Application</a>
                </div>
            </section>
        </div>
    );
}
