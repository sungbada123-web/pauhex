'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, FileCheck, ArrowRight } from 'lucide-react';

export default function WarrantyPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="pt-32 pb-24 bg-[#003366] text-white">
                <div className="container text-center max-w-3xl">
                    <ShieldCheck className="w-16 h-16 text-[#179A97] mx-auto mb-8" />
                    <h1 className="text-4xl lg:text-5xl font-light mb-8">Warranty & <span className="font-semibold text-[#179A97]">Protection</span></h1>
                    <p className="text-xl text-white/60 font-light">Medical-grade hardware deserves medical-grade protection. Manage your product safety plans.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-3xl font-light text-[#003366] mb-8">Protecting Your <span className="font-semibold">Investment</span></h2>
                            <p className="text-lg text-gray-600 font-light mb-12">Every PAUHEX device comes with a standard 12-month manufacturer warranty. For professional institutions and seniors living at home, we offer extended protection plans that cover 7x24 on-site support and replacement guarantees.</p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1"><Calendar className="w-5 h-5 text-[#179A97]" /></div>
                                    <div>
                                        <h4 className="font-bold text-[#003366]">Extended Warranty</h4>
                                        <p className="text-sm text-gray-500 font-light">Add up to 5 years of full hardware protection and priority support.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><FileCheck className="w-5 h-5 text-[#179A97]" /></div>
                                    <div>
                                        <h4 className="font-bold text-[#003366]">Pauhex Care+</h4>
                                        <p className="text-sm text-gray-500 font-light">Comprehensive accidental damage protection for home care environments.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 bg-gray-50 border border-gray-100 rounded-sm">
                            <h3 className="text-2xl font-light text-[#003366] mb-8">Register <span className="font-semibold">Product</span></h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Serial Number</label>
                                    <input type="text" placeholder="PHX-XXXX-XXXX" className="w-full px-6 py-4 bg-white border border-gray-200 focus:outline-none focus:border-[#179A97] transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Purchase Date</label>
                                    <input type="date" className="w-full px-6 py-4 bg-white border border-gray-200 focus:outline-none focus:border-[#179A97] transition-all" />
                                </div>
                                <button className="w-full py-5 bg-[#003366] text-white uppercase tracking-widest font-bold text-sm hover:bg-[#179A97] transition-all rounded-sm">Register Device</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
