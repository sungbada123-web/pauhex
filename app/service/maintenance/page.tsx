'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Settings, Activity, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function MaintenancePage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="pt-32 pb-24 bg-[#F8FAFB]">
                <div className="container">
                    <h1 className="text-4xl lg:text-6xl font-light text-[#003366] mb-6">Hardware <span className="font-semibold">Maintenance</span></h1>
                    <p className="text-xl text-gray-500 font-light max-w-2xl">Ensuring your execution systems remain calibrated and dependable throughout their lifecycle.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { icon: <Settings className="w-8 h-8" />, title: "Remote Diagnostics", desc: "Edge-based self-checking ensures your device stays healthy." },
                                { icon: <Activity className="w-8 h-8" />, title: "Sensor Calibration", desc: "Annual calibration for mmWave radar to maintain sub-mm accuracy." },
                                { icon: <ShieldCheck className="w-8 h-8" />, title: "Lock Testing", desc: "Physical stress tests for electromagnetic locking mechanisms." },
                                { icon: <MessageSquare className="w-8 h-8" />, title: "Technical Support", desc: "Direct access to our Hainan-based engineering hub." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 border border-gray-100 rounded-sm hover:shadow-md transition-shadow">
                                    <div className="text-[#179A97] mb-6">{item.icon}</div>
                                    <h3 className="text-lg font-bold text-[#003366] mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#003366] text-white p-12 rounded-sm shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#179A97]/10 -skew-x-12 translate-x-1/2"></div>
                            <h2 className="text-2xl font-semibold mb-8">Request Maintenance</h2>
                            <p className="text-white/60 font-light mb-12">Submit a service request for hardware audits or on-site maintenance.</p>
                            <Link href="/contact" className="w-full py-5 bg-[#179A97] text-white uppercase tracking-widest font-bold text-sm hover:bg-white hover:text-[#003366] transition-all rounded-sm inline-block text-center shadow-lg">Schedule Service</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
