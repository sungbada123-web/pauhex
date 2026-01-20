'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Automatically accept all cookies and hide the banner
        localStorage.setItem('pauhex_cookie_consent', 'all');
        setIsVisible(false);
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('pauhex_cookie_consent', 'all');
        setIsVisible(false);
    };

    const handleEssentialOnly = () => {
        localStorage.setItem('pauhex_cookie_consent', 'essential');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="fixed bottom-0 left-0 right-0 z-[9999] px-6 pb-6 pt-4 flex justify-center pointer-events-none"
                >
                    <div className="bg-[#212529] bg-opacity-95 backdrop-blur-sm text-white max-w-[1200px] w-full p-6 md:p-8 rounded-sm shadow-2xl pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6">

                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-sm md:text-base font-light leading-relaxed text-gray-200">
                                This site uses cookies to offer you a better browsing experience, including for anonymized analytics.
                                <br className="hidden md:block" />
                                Find out more about how we use <Link href="/legal/datenschutz" className="underline hover:text-white transition-colors">Cookies</Link>.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <button
                                onClick={handleEssentialOnly}
                                className="px-6 py-3 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap rounded-sm text-gray-300"
                            >
                                No thanks, only essential cookies
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="px-8 py-3 bg-white text-[#212529] text-sm font-bold hover:bg-gray-100 transition-colors whitespace-nowrap rounded-[2px]"
                            >
                                Accept all cookies
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
