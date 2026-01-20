'use client';

import { ArrowRight, Zap, Heart, Radar, Eye, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from './data/products';
import HeroCarousel from './components/HeroCarousel';

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* HERO SECTION - Auto-Rotating Carousel */}
      <HeroCarousel />

      {/* QUICK ACCESS CARDS */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#179A97] mb-4">Core Ecosystem</h2>
            <p className="text-3xl font-light text-[#003568]">Integrated Solutions for Digital Health</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Smart Dispensing',
                icon: <Zap className="w-10 h-10" />,
                desc: 'Medical-grade medication verification using Edge-AI, effectively eliminating dispensing errors.',
                href: '/products/med-pro',
                color: '#003568'
              },
              {
                title: 'Vital Monitoring',
                icon: <Radar className="w-10 h-10" />,
                desc: '60GHz mmWave sensing providing 24/7 contactless vitals and fall detection without wearables.',
                href: '/products/vital-radar',
                color: '#179A97'
              },
              {
                title: 'Health Hub',
                icon: <Heart className="w-10 h-10" />,
                desc: 'High-performance local AI gateway processing critical data locally for extreme privacy.',
                href: '/products/health-hub',
                color: '#2D3748'
              },
              {
                title: 'Rhythmic Care',
                icon: <Eye className="w-10 h-10" />,
                desc: 'Non-invasive bio-feedback sleep monitoring for neurological rhythm intervention.',
                href: '/products/sync-mat',
                color: '#003568'
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-[#F9FBFE] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#E2E8F0] rounded-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#008080] group-hover:h-full transition-all duration-500" />
                <div className="mb-10 transition-transform group-hover:-translate-y-2 duration-500" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003568] mb-4 tracking-tight">{item.title}</h3>
                <p className="text-sm text-[#555555] mb-8 leading-relaxed font-light">{item.desc}</p>
                <div className="flex items-center text-[#008080] text-[10px] font-bold uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                  Technical Details <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT - AI HUB */}
      <section className="py-32 bg-[#F9FBFD]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative h-[600px] overflow-hidden rounded-sm group">
              <Image
                src="/images/health-hub-v2.png"
                alt="Pauhex Health Hub"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#003568]/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>

            <div className="pl-0 lg:pl-12">
              <div className="text-[#179A97] font-bold tracking-[0.3em] uppercase text-xs mb-8">System Architecture</div>
              <h2 className="text-6xl font-light text-[#003568] mb-10 leading-[1.1]">
                Distributed <br />
                <span className="font-semibold">AI Hub</span>
              </h2>
              <p className="text-xl text-[#555555] mb-12 font-light leading-relaxed">
                Experience the secure core of the health ecosystem. Pauhex Hub utilizes high-performance NPU architecture
                to process all physiological data locally, ensuring medical-grade privacy and real-time inference
                across the entire device network.
              </p>

              <ul className="space-y-6 mb-12">
                {[
                  { label: 'Edge Computing', desc: 'RK3588 6TOPS NPU for local AI execution.' },
                  { label: 'Data Sovereignty', desc: 'Secure AES-256 local encrypted storage.' },
                  { label: 'Sync Protocol', desc: 'Ultra-low latency multi-device coordination.' }
                ].map((feature, i) => (
                  <li key={i} className="flex gap-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#179A97] mt-2.5"></div>
                    <div>
                      <div className="text-[#003568] font-bold text-sm tracking-widest uppercase mb-1">{feature.label}</div>
                      <div className="text-gray-500 font-light text-sm">{feature.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <Link href="/products/health-hub" className="group inline-flex items-center gap-4 bg-[#003568] text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-[#008080] transition-all rounded-sm shadow-xl">
                Technical Specifications
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-[#003568] mb-6">Core Technology Pillars</h2>
            <p className="text-xl text-[#718096] max-w-3xl mx-auto leading-relaxed">
              Integrated hardware and software solutions specifically designed for the core health needs of seniors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group"
              >
                <div className="relative h-[280px] bg-gray-50 mb-4 overflow-hidden transition-all border border-transparent group-hover:border-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-[#003568] shadow-sm">
                    {product.isNew ? 'New' : 'Best Seller'}
                  </div>
                </div>
                <div className="mb-4 text-[#999] text-xs font-bold tracking-widest uppercase">{product.category}</div>
                <h3 className="text-xl font-light text-[#003568] mb-1 group-hover:text-[#179A97] transition-colors">{product.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="py-40 bg-[#003568] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#179A97]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-7xl font-light mb-12 tracking-tight">
              Technology. Care. <span className="font-semibold text-[#179A97]">Dignity.</span>
            </h2>
            <p className="text-2xl font-light leading-relaxed text-white/70 mb-24 max-w-3xl mx-auto">
              Our core mission remains immutable: to empower independent aging through
              high-precision algorithms and fail-safe hardware execution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { val: 'AI', sub: 'CLINICAL GRADE EXECUTION' },
                { val: '60GHz', sub: 'INVISIBLE CONTACTLESS RADAR' },
                { val: 'USA', sub: 'GLOBAL HEALTH INNOVATION' }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="text-7xl font-bold text-[#179A97] mb-6 font-mono opacity-80 group-hover:opacity-100 transition-opacity">{item.val}</div>
                  <div className="text-[11px] uppercase tracking-[0.4em] text-white/40 font-bold group-hover:text-[#179A97] transition-colors">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
