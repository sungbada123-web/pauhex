'use client';

import { motion } from 'framer-motion';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsPage() {
    const news = [
        {
            date: "Oct 24, 2024",
            title: "Pauhex Announces New Engineering Hub in Hainan",
            excerpt: "Establishing a medical-grade assembly line to scale 'Execution Intelligence' hardware globally.",
            image: "/images/news_hainan_hub_png_1768395047326.png"
        },
        {
            date: "Sept 12, 2024",
            title: "Breakthrough in 60GHz mmWave Vital Sign Detection",
            excerpt: "New algorithms achieve 98% accuracy in respiratory rate monitoring through multi-layer bedding.",
            image: "/images/news_radar_breakthrough_png_1768395068089.png"
        },
        {
            date: "Aug 05, 2024",
            title: "Pauhex Pro-Dispense Receives Design Innovation Award",
            excerpt: "Recognized for its unique physical-locking safety mechanism and elder-friendly interface.",
            image: "/images/news_design_award_png_1768395083265.png"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="pt-32 pb-12 bg-gray-50">
                <div className="container">
                    <h1 className="text-4xl lg:text-5xl font-light text-[#003366] mb-4">Latest <span className="font-semibold">News</span></h1>
                    <p className="text-xl text-gray-500 font-light">Stay updated on our latest research, product launches, and brand milestones.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {news.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-video bg-gray-100 mb-8 rounded-sm overflow-hidden relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-[#003366]/0 group-hover:bg-[#003366]/10 transition-colors"></div>
                                </div>
                                <div className="flex items-center gap-2 text-[#179A97] text-xs font-bold uppercase tracking-widest mb-4">
                                    <Calendar className="w-3 h-3" /> {item.date}
                                </div>
                                <h3 className="text-xl font-semibold text-[#003366] mb-4 group-hover:text-[#179A97] transition-colors">{item.title}</h3>
                                <p className="text-gray-600 font-light mb-6">{item.excerpt}</p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#003366]">Read More <ArrowRight className="w-3 h-3" /></span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
