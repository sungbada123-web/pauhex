'use client';

import { motion } from 'framer-motion';
import ProductMatrix from '../components/ProductMatrix';

export default function ProductsPage() {
    return (
        <div className="min-h-screen pb-32 bg-white">
            <div className="max-w-[1640px] mx-auto px-6 lg:px-12">
                {/* Header - Precise Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block px-4 py-2 text-[#707070] text-xs font-bold tracking-[0.2em] mb-8 uppercase">
                        AI-Driven Smart Health Ecosystem
                    </div>
                    <h1 className="text-7xl font-light text-[#003568] mb-8 tracking-tight">
                        PAUHEX <span className="font-semibold text-[#179A97]">Product Matrix</span>
                    </h1>
                    <p className="text-2xl text-[#707070] font-light max-w-4xl mx-auto leading-relaxed">
                        Building a comprehensive health protection across five core dimensions. From precision dispensing to environmental interaction��fully integrated, medical-grade verified algorithms.
                    </p>
                </motion.div>

                {/* Matrix Component */}
                <ProductMatrix />

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-40 text-center bg-[#F9FBFD] py-20 rounded-sm border border-gray-100"
                >
                    <h2 className="text-5xl font-light text-[#555555] mb-8 text-shadow-sm">
                        Ready to start the next decade of smart health?
                    </h2>
                    <p className="text-[#606060] font-light text-xl mb-12 max-w-3xl mx-auto">
                        Explore how AI algorithms and humanized sensing reshape the quality of life in senior years.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-12 py-5 bg-[#003568] text-white hover:bg-[#179A97] transition-all shadow-lg text-sm font-bold uppercase tracking-widest rounded-sm"
                    >
                        Contact a Specialist
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
