'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Zap, Heart, Radar, Brain, Moon, Eye, Leaf, Pill, ArrowRight, ChevronRight } from 'lucide-react';


// Menu Configuration
const menuConfig: Record<string, {
  intro: { title: string; desc: React.ReactNode; cta: string; ctaLink: string };
  columns: { title: string; items: { name: string; desc?: string; href: string; icon?: React.ReactNode }[] }[];
}> = {
  'Products': {
    intro: {
      title: 'Product Center',
      desc: <>Precision Dispensing. Health Monitoring. Smart Aging.<br /><br />From AI-driven verification to contactless monitoring, we provide medical-grade solutions for senior health.</>,
      cta: 'View All Products',
      ctaLink: '/products'
    },
    columns: [
      {
        title: 'Smart Dispensing',
        items: [
          { name: 'Pauhex Pro-Dispense', desc: 'AI-Enforced Smart Dispensing System', href: '/products/med-pro', icon: <Pill className="w-4 h-4" /> },
          { name: 'Pauhex Light', desc: 'Portable Smart Pillbox', href: '/products/med-light', icon: <Zap className="w-4 h-4" /> },
        ]
      },
      {
        title: 'Health Monitoring',
        items: [
          { name: 'Pauhex Vital-Watch', desc: 'Contactless Vital Signs Radar', href: '/products/vital-radar', icon: <Radar className="w-4 h-4" /> },
          { name: 'Pauhex Bio-Link', desc: 'Life Rhythm Intervention Mat', href: '/products/sync-mat', icon: <Heart className="w-4 h-4" /> },
          { name: 'Pauhex Vision', desc: 'AI Bathroom Safety Monitor', href: '/products/vision', icon: <Eye className="w-4 h-4" /> },
        ]
      },
      {
        title: 'Hubs & Platforms',
        items: [
          { name: 'Pauhex Health Hub', desc: 'Distributed AI Computing Gateway', href: '/products/health-hub', icon: <Brain className="w-4 h-4" /> },
          { name: 'Pauhex Cloud', desc: 'Senior Health Management Platform', href: '/service/cloud', icon: <Radar className="w-4 h-4" /> },
        ]
      },
      {
        title: 'Environment',
        items: [
          { name: 'Pauhex Space', desc: 'Smart Environment Control', href: '/products/space', icon: <Leaf className="w-4 h-4" /> },
        ]
      }
    ]
  },
  'Solutions': {
    intro: {
      title: 'Solutions',
      desc: <>Comprehensive smart care pathways.<br /><br />Integrated hardware and software solutions for home care, communities, and institutions.</>,
      cta: 'Explore Solutions',
      ctaLink: '/solutions'
    },
    columns: [
      {
        title: 'By Scenario',
        items: [
          { name: 'Home Care', href: '/solutions/home' },
          { name: 'Community Hub', href: '/solutions/community' },
          { name: 'Professional Institution', href: '/solutions/clinical' },
        ]
      },
      {
        title: 'By Need',
        items: [
          { name: 'High-Risk Medication', href: '/solutions/medication' },
          { name: 'Chronic Monitoring', href: '/solutions/monitoring' },
          { name: 'Smart Sleep Improvement', href: '/solutions/sleep' },
        ]
      }
    ]
  },
  'Research': {
    intro: {
      title: 'Research & Tech',
      desc: <>Evidence-based medicine leading innovation.<br /><br />We are committed to clinical trials, AI algorithm development, and physiological research.</>,
      cta: 'Technical Whitepapers',
      ctaLink: '/science'
    },
    columns: [
      {
        title: 'Core Technology',
        items: [
          { name: 'AI Medication Recognition', href: '/science/ai-med' },
          { name: 'mmWave Radar Algorithms', href: '/science/radar' },
          { name: 'Health Data Models', href: '/science/data' },
        ]
      }
    ]
  },
  'Company': {
    intro: {
      title: 'About PAUHEX',
      desc: <>Care rooted in technology.<br /><br />Founded in 2024, specialized in smart dispensing and senior digital health.</>,
      cta: 'Learn Our Story',
      ctaLink: '/about'
    },
    columns: [
      {
        title: 'Information',
        items: [
          { name: 'Our Brand', href: '/about/story' },
          { name: 'Vision & Mission', href: '/about/mission' },
          { name: 'Careers', href: '/about/careers' },
        ]
      },
      {
        title: 'News & Media',
        items: [
          { name: 'Latest Updates', href: '/about/news' },
          { name: 'Press & Media', href: '/about/press' },
        ]
      }
    ]
  }
};

const navLinks = [
  { name: 'Products', href: '/products', hasMega: true },
  { name: 'Solutions', href: '/solutions', hasMega: true },
  { name: 'Research', href: '/science', hasMega: true },
  { name: 'Company', href: '/about', hasMega: true },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container">
        <nav className="flex items-center h-[80px] lg:h-[80px] gap-4 lg:gap-6">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo_transparent.png"
              alt="PAUHEX"
              width={260}
              height={65}
              className="h-12 lg:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 ml-2 flex-grow justify-end">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMega && setActiveMenu(link.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-[#4A5568] hover:text-[#003366] transition-colors py-8 lg:px-2"
                >
                  {link.name}
                  {link.hasMega && <ChevronDown className="w-3 h-3 opacity-50" />}
                </Link>

                {/* Mega Menu */}
                <AnimatePresence>
                  {link.hasMega && activeMenu === link.name && menuConfig[link.name] && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[80px] lg:top-[80px] w-screen bg-white shadow-xl"
                      style={{ position: 'fixed', left: 0, right: 0 }}
                    >
                      <div className="container py-16">
                        <div className="flex gap-24">
                          {/* Left Column: Intro */}
                          <div className="w-1/3 pt-2">
                            <h2 className="text-4xl font-light text-[#003366] mb-8">
                              {menuConfig[link.name].intro.title}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-sm font-light">
                              {menuConfig[link.name].intro.desc}
                            </p>
                            <Link
                              href={menuConfig[link.name].intro.ctaLink}
                              className="text-sm font-bold text-[#008080] uppercase tracking-wider hover:text-[#006666] transition-colors flex items-center gap-2"
                            >
                              {menuConfig[link.name].intro.cta} <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>

                          {/* Right Column: Categories */}
                          <div className="w-2/3 grid grid-cols-2 gap-x-20 gap-y-12">
                            {menuConfig[link.name].columns.map((column) => (
                              <div key={column.title}>
                                <h4 className="text-xs font-bold text-[#718096] uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
                                  {column.title}
                                </h4>
                                <ul className="space-y-6">
                                  {column.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        className="group flex items-center justify-between py-1 transition-transform duration-300"
                                      >
                                        <div className="flex items-center gap-3">
                                          {item.icon && (
                                            <div className="text-[#CBD5E0] group-hover:text-[#009999] transition-colors">
                                              {item.icon}
                                            </div>
                                          )}
                                          <div>
                                            <span className="text-xl font-light text-[#2D3748] group-hover:text-[#003366] transition-colors">
                                              {item.name}
                                            </span>
                                            {item.desc && (
                                              <p className="text-xs text-[#718096] mt-1.5 font-light">{item.desc}</p>
                                            )}
                                          </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-[#CBD5E0] group-hover:text-[#009999] opacity-0 group-hover:opacity-100 transition-all" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side: CTA & Language */}
          <div className="hidden lg:flex items-center gap-6 ml-8">

            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#003366] !text-white text-sm font-medium hover:bg-[#002855] transition-colors"
              style={{ borderRadius: '2px' }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#003366]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="container py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-light text-[#003366] hover:bg-gray-50 py-3 border-b border-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    {link.name}
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </div>
                </Link>
              ))}
              <div className="h-px bg-gray-50 mx-auto w-full" />
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 bg-[#003366] text-white font-medium hover:bg-[#002855] transition-colors"
                style={{ borderRadius: '2px' }}
                onClick={() => setMobileOpen(false)}
              >
                Contact PAUHEX
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
