'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const footerLinks = {
    products: [
        { name: 'Pauhex Pro-Dispense', href: '/products/med-pro' },
        { name: 'Pauhex Vital-Watch', href: '/products/vital-radar' },
        { name: 'Pauhex Health Hub', href: '/products/health-hub' },
        { name: 'Pauhex Bio-Link', href: '/products/sync-mat' },
        { name: 'View All', href: '/products' },
    ],
    solutions: [
        { name: 'Home Care', href: '/solutions/home' },
        { name: 'High-Risk Medication', href: '/solutions/medication' },
        { name: 'Chronic Monitoring', href: '/solutions/monitoring' },
        { name: 'Facility Digitization', href: '/solutions/clinical' },
    ],
    company: [
        { name: 'About PAUHEX', href: '/about' },
        { name: 'Research & Science', href: '/science' },
        { name: 'Join Us', href: '/about/careers' },
        { name: 'Latest News', href: '/about/news' },
    ],
    service: [
        { name: 'Downloads & Manuals', href: '/service/downloads' },
        { name: 'App Ecosystem', href: '/service/app' },
        { name: 'Customer Support', href: '/service/support' },
        { name: 'FAQ', href: '/service/faq' },
    ],
    legal: [
        { name: 'Impressum', href: '/legal/impressum' },
        { name: 'Privacy Policy', href: '/legal/datenschutz' },
        { name: 'Terms of Service', href: '/legal/terms' },
        { name: 'Cookie Policy', href: '/legal/cookies' },
    ],
};

const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/pauhex', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/pauhex', label: 'Twitter' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/@pauhex', label: 'YouTube' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@pauhex.com', label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="bg-[#F8FAFC] pt-32 pb-10 text-[#4A5568]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <Image
                                src="/images/logo_transparent.png"
                                alt="PAUHEX"
                                width={260}
                                height={65}
                                className="h-12 md:h-16 w-auto"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 max-w-xs font-light">
                            Exploring AI-driven precision dispensing and senior digital health monitoring.
                            <br /><br />
                            Pauhex Technology (USA).
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-gray-100 flex items-center justify-center hover:bg-[#003568] hover:text-white transition-all text-gray-500"
                                    style={{ borderRadius: '2px' }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#009999]">Products</h4>
                        <ul className="space-y-4">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#003568] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#009999]">Solutions</h4>
                        <ul className="space-y-4">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#003568] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#009999]">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#003568] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#009999]">Service</h4>
                        <ul className="space-y-4">
                            {footerLinks.service.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#003568] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#009999]">Legal</h4>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#003568] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-20">
                <div className="container py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-400">
                            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Pauhex Technology LLC. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <span className="text-xs text-gray-400 uppercase tracking-wider">
                                Designed for Global Care 🇺🇸
                            </span>
                            <span className="text-xs text-gray-400">
                                AI-Powered Healthcare Innovation
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
