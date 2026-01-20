'use client';

import { useState, useEffect, useRef } from 'react';
import { Globe, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Language list configuration - using ASCII only to avoid encoding issues
const languages = [
    { code: 'en', name: 'English', flag: 'US' },
    { code: 'zh-CN', name: 'Chinese (Simplified)', flag: 'CN' },
    { code: 'zh-TW', name: 'Chinese (Traditional)', flag: 'TW' },
    { code: 'ja', name: 'Japanese', flag: 'JP' },
    { code: 'ko', name: 'Korean', flag: 'KR' },
    { code: 'fr', name: 'French', flag: 'FR' },
    { code: 'de', name: 'German', flag: 'DE' },
    { code: 'es', name: 'Spanish', flag: 'ES' },
    { code: 'it', name: 'Italian', flag: 'IT' },
    { code: 'nl', name: 'Dutch', flag: 'NL' },
];

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: any;
    }
}

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('en');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const addScript = () => {
            window.googleTranslateElementInit = () => {
                if (window.google?.translate?.TranslateElement) {
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: 'en',
                            includedLanguages: languages.map(l => l.code).join(','),
                            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                            autoDisplay: false
                        },
                        'google_translate_element_hidden'
                    );
                }
            };

            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        };

        if (!document.querySelector('script[src*="translate.google.com"]')) {
            addScript();
        }

        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
        };

        const googtrans = getCookie('googtrans');
        if (googtrans) {
            const lang = googtrans.split('/').pop();
            if (lang) setCurrentLang(lang);
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (langCode: string) => {
        // 0. Update State
        setCurrentLang(langCode);
        setIsOpen(false);

        // 1. Clear existing cookies to avoid conflicts (host, root, and dot-prefixed)
        const domain = window.location.hostname;
        const cookieOptions = [
            'path=/',
            `path=/; domain=${domain}`,
            `path=/; domain=.${domain}` // Catch-all for subdomains
        ];

        cookieOptions.forEach(opt => {
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${opt}`;
        });

        // 2. Set new cookie
        // Format: /sourceLang/targetLang
        // If switching back to English (source), we effectively reset it, but setting /en/en helps keep state consistent.
        const cookieValue = `/en/${langCode}`;

        document.cookie = `googtrans=${cookieValue}; path=/`;
        document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain}`;

        // 3. Reload to trigger Google Translate
        window.location.reload();
    };

    const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Language Switcher"
            >
                <Globe size={18} className="text-slate-600" />
                <span className="text-sm font-medium text-slate-700 hidden lg:inline">
                    {currentLanguage.name}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`w-full px-4 py-2.5 flex items-center justify-between hover:bg-slate-50 transition-colors ${currentLang === lang.code ? 'bg-slate-50' : ''
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold text-slate-500">{lang.flag}</span>
                                    <span className="text-sm font-medium text-slate-700">{lang.name}</span>
                                </div>
                                {currentLang === lang.code && (
                                    <Check size={16} className="text-[#179A97] stroke-[3]" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .goog-te-banner-frame,
                .goog-te-banner,
                .goog-te-menu-value span:nth-child(2),
                .goog-te-menu-value img,
                .goog-te-gadget-icon,
                .skiptranslate {
                    display: none !important;
                }
                body {
                    top: 0 !important;
                    position: static !important;
                }
                .goog-te-spinner-pos,
                .goog-te-balloon-frame,
                #google_translate_element_hidden {
                    display: none !important;
                }
            `}</style>
        </div>
    );
}
