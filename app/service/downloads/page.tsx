'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Globe, ArrowRight } from 'lucide-react';

export default function DownloadsPage() {
    const documents = [
        { title: "Pauhex Pro-Dispense User Manual", size: "4.2 MB", type: "PDF" },
        { title: "Vital-Radar Quick Start Guide", size: "1.8 MB", type: "PDF" },
        { title: "Clinical Validation Report 2024", size: "12.5 MB", type: "PDF" },
        { title: "Health Hub API Documentation", size: "2.1 MB", type: "PDF" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="pt-32 pb-12 bg-[#F8FAFB]">
                <div className="container">
                    <h1 className="text-4xl lg:text-5xl font-light text-[#003366] mb-4">Resource <span className="font-semibold">Downloads</span></h1>
                    <p className="text-xl text-gray-500 font-light">Access technical documents, manuals, and reports.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container">
                    <div className="space-y-4">
                        {documents.map((doc, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.01 }}
                                className="p-8 bg-white border border-gray-100 hover:border-[#179A97] rounded-sm flex flex-col sm:flex-row justify-between items-center gap-8 group cursor-pointer shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm text-[#179A97] group-hover:bg-[#179A97] group-hover:text-white transition-colors">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#003366] mb-1">{doc.title}</h3>
                                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">{doc.type} ?{doc.size}</span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#179A97]">
                                    Download <Download className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
