'use client';

import Link from 'next/link';
import { FileText, ArrowLeft, Download, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function PublicationsPage() {
    const publications = [
        {
            id: 1,
            title: 'Longitudinal Impact of AI-Driven Medication Adherence in Senior Populations',
            journal: 'Journal of Geriatric Health Technology',
            year: '2025',
            authors: 'Smith J., Chen L., et al.',
            abstract: 'A 12-month study demonstrating a 45% improvement in medication adherence using Pauhex Smart Dispensing algorithms compared to standard care.',
            link: '#'
        },
        {
            id: 2,
            title: 'Non-Invasive 60GHz Radar Monitoring for Sleep Apnea Detection',
            journal: 'IEEE Transactions on Biomedical Engineering',
            year: '2024',
            authors: 'Pauhex R&D Team',
            abstract: 'Validation of contactless vital sign monitoring accuracy against polysomnography standards.',
            link: '#'
        },
        {
            id: 3,
            title: 'Edge AI Architecture for Privacy-First Health Data Processing',
            journal: 'International Conference on Edge Computing',
            year: '2024',
            authors: 'Zhang W., Patel R.',
            abstract: 'Technical white paper on the NPU-based local processing architecture of the Pauhex Health Hub.',
            link: '#'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <div className="relative w-full h-[350px] mb-16 bg-[#003366]">
                <Image
                    src="/images/science/header-abstract.png"
                    alt="Science Research"
                    fill
                    className="object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col pt-10">
                    <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                        Research & Development
                    </div>
                    <h1 className="text-5xl font-light text-white tracking-widest uppercase">Science</h1>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center text-slate-500 hover:text-[#003568] transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-[#003568] text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                        Research & Development
                    </div>
                    <h1 className="text-4xl md:text-5xl font-light text-[#003568] mb-6">
                        Clinical <span className="font-semibold">Publications</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                        Our technology is grounded in rigorous scientific validation. Explore our latest peer-reviewed research and technical white papers.
                    </p>
                </div>

                <div className="grid gap-8">
                    {publications.map((is) => (
                        <div key={is.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 bg-blue-50 text-[#003568] rounded-lg flex items-center justify-center">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="grow">
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-2">
                                        <span className="font-semibold text-[#179A97]">{is.journal}</span>
                                        <span>•</span>
                                        <span>{is.year}</span>
                                        <span>•</span>
                                        <span>{is.authors}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#2D3748] mb-3">
                                        {is.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {is.abstract}
                                    </p>
                                    <div className="flex gap-4">
                                        <a href={is.link} className="inline-flex items-center text-sm font-bold text-[#003568] hover:text-[#179A97] transition-colors">
                                            <Download className="w-4 h-4 mr-2" />
                                            Download PDF
                                        </a>
                                        <a href={is.link} className="inline-flex items-center text-sm font-bold text-[#003568] hover:text-[#179A97] transition-colors">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            View Online
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
