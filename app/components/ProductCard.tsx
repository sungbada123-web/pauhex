'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
    title: string;
    subtitle: string;
    description: string;
    href: string;
    icon: React.ReactNode;
}

export default function ProductCard({ title, subtitle, description, href, icon }: ProductCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="card-hover bg-white p-8 cursor-pointer group hover:bg-[#F9FBFD] transition-colors"
        >
            <Link href={href} className="block">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#003568] flex items-center justify-center mb-6 text-white">
                    {icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium text-[#555555] mb-4 group-hover:text-[#179A97] transition-colors">
                    {title}
                </h3>

                {/* Subtitle */}
                <p className="text-[#179A97] text-sm font-medium mb-4">{subtitle}</p>

                {/* Description */}
                <p className="text-[#707070] font-light leading-relaxed mb-6">
                    {description}
                </p>

                {/* CTA Link */}
                <div className="flex items-center text-[#003568] font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>
        </motion.div>
    );
}
