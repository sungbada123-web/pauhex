'use client';

import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="container max-w-3xl">
                <h1 className="text-4xl font-light text-[#003568] mb-12 text-center">Frequently Asked Questions</h1>

                <div className="space-y-4">
                    {[
                        "How do I set up the Pauhex Pro-Dispense?",
                        "Is the Vital Reader safe for pets?",
                        "What is the battery life of the wireless sensors?",
                        "Does Pauhex integrate with Apple Health?"
                    ].map((q, i) => (
                        <div key={i} className="border border-gray-100 rounded-sm p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium text-[#2D3748]">{q}</h3>
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
