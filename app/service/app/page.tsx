'use client';

import { Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AppPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="container text-center">
                <Smartphone className="w-16 h-16 text-[#003568] mx-auto mb-6" />
                <h1 className="text-4xl font-light text-[#003568] mb-4">Pauhex App Ecosystem</h1>
                <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                    Control all your devices, view real-time health data, and receive alerts instantly.
                    Available for Family and Professional Caregivers.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="px-6 py-3 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                        iOS App Store
                    </button>
                    <button className="px-6 py-3 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                        Google Play
                    </button>
                </div>

                <div className="mt-20 relative max-w-sm mx-auto">
                    <div className="relative aspect-[9/19.5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gray-900/10">
                        <Image
                            src="/images/service/app-showcase.png"
                            alt="Pauhex App Interface"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
