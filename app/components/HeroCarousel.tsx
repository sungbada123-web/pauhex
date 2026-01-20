'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        image: '/images/pro-dispense-new-1.png',
        tag: 'Medical-Grade AI Innovation',
        title: 'Precision Dispensing, Safety First',
        subtitle: 'Crafted to redefine senior digital health.',
        description: 'AI-powered smart medication dispensing system designed for high-precision verification and error-free execution.',
        link: '/products/med-pro',
        overlayColor: 'from-gray-900/60 via-gray-900/20 to-transparent'
    },
    {
        id: 2,
        image: '/images/vital-radar-refined.png',
        tag: 'Contactless Vital Sensing',
        title: 'Protecting Life, No Blind Spots',
        subtitle: '60GHz mmWave Radar, 24/7 Invisible Monitoring.',
        description: 'Monitor vitals and detect falls in real-time without any wearable devices, ensuring every minute of safety.',
        link: '/products/vital-radar',
        overlayColor: 'from-gray-900/60 via-gray-900/20 to-transparent'
    },
    {
        id: 3,
        tag: 'Smart Health Hub',
        title: 'Local Intelligence, Pure Privacy',
        subtitle: 'PAUHEX Health Hub',
        description: 'Distributed AI processing gateway, handling core health data locally for extreme response speeds and privacy.',
        image: '/images/health-hub-v2.png',
        link: '/products/health-hub',
        overlayColor: 'from-gray-900/70 via-gray-900/30 to-transparent'
    }
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden group bg-white">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    {/* Full Width Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={slides[current].image}
                            alt={slides[current].title}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                        {/* Progressive overlay for mobile readability */}
                        <div className="absolute inset-0 bg-black/40 lg:bg-transparent"></div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].overlayColor} sm:from-black/60 sm:via-transparent sm:to-transparent opacity-90`}></div>
                    </div>

                    {/* Content Container */}
                    <div className="container relative z-10 h-full flex items-center">
                        <div className="max-w-3xl pt-20 pl-4 md:pl-12 border-l-4 border-white/20 ml-4 md:ml-0">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="text-white"
                            >
                                <div className="inline-block px-4 py-1.5 border border-white/30 backdrop-blur-md text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-10 rounded-sm">
                                    {slides[current].tag}
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6 md:mb-8 text-shadow-lg drop-shadow-md">
                                    {slides[current].title}
                                </h1>
                                <p className="text-xl md:text-2xl font-light text-white/90 mb-12 leading-relaxed max-w-xl text-shadow-md">
                                    {slides[current].description}
                                </p>

                                <div className="flex gap-4">
                                    <Link
                                        href={slides[current].link}
                                        className="group inline-flex items-center gap-3 bg-white text-[#003568] px-6 py-3 md:px-8 md:py-4 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-[#009999] hover:text-white transition-all rounded-[2px] shadow-lg"
                                    >
                                        Explore Details
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 right-12 flex gap-4 z-20">
                <button
                    onClick={prevSlide}
                    className="w-14 h-14 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[#003568] transition-all rounded-full backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-14 h-14 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[#003568] transition-all rounded-full backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-12 left-12 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`transition-all duration-500 rounded-full h-2 shadow-sm ${current === index ? 'w-12 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
