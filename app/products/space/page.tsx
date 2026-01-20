'use client';

import { Leaf, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SpacePage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-[2px]">
                            <Leaf className="w-3 h-3" />
                            Environment
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-light text-[#003366] mb-6">
                            Pauhex <span className="font-semibold">Space</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-light mb-8 max-w-lg">
                            Smart environment control for senior living. Optimizes temperature, humidity, and lighting for health.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#003366] text-white font-bold uppercase tracking-wider text-sm rounded-[2px]">
                            Contact Sales <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="relative h-[500px] bg-gray-50 flex items-center justify-center rounded-lg overflow-hidden shadow-2xl border border-gray-100">
                        <Image
                            src="/images/products/space-control.png"
                            alt="Pauhex Space Environmental Control Unit"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
