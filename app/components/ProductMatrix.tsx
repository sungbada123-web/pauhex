'use client';

import { motion } from 'framer-motion';
import { products } from '../data/products';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ProductMatrix() {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="flex flex-col mb-24 px-4">
                    <h2 className="text-5xl font-light text-[#003568] mb-6">PAUHEX <span className="font-semibold text-[#179A97]">Product Matrix</span></h2>
                    <div className="h-1 w-24 bg-[#179A97]"></div>
                </div>

                <div className="space-y-32">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Product Image Section */}
                            <div className="w-full lg:w-1/2 aspect-square relative bg-gray-50 rounded-sm group overflow-hidden border border-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 opacity-10 pointer-events-none"
                                    style={{ background: `radial-gradient(circle at center, ${product.color}, transparent)` }}
                                ></div>
                            </div>

                            {/* Info Section */}
                            <div className="w-full lg:w-1/2 px-4 lg:px-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-[2px]" style={{ backgroundColor: product.color }}></div>
                                    <span className="text-xs font-bold text-[#A0AEC0] uppercase tracking-[0.2em]">{product.category}</span>
                                </div>

                                <h3 className="text-5xl font-light text-[#003568] mb-6">{product.name}</h3>
                                <p className="text-[#179A97] font-bold text-sm uppercase tracking-widest mb-8">{product.tagline}</p>

                                <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                    {product.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-12">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#179A97]" />
                                            <span className="text-base text-[#2D3748] font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={product.href}
                                    className="inline-flex items-center gap-4 bg-[#003568] text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.15em] hover:bg-[#179A97] transition-all rounded-[2px]"
                                >
                                    View Specifications
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
