export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-white py-10">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-5xl font-medium text-[#003568] mb-8 text-center">Legal Notice</h1>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Corporate Information</h2>
                        <p className="text-[#707070] font-light leading-relaxed mb-2">
                            <strong className="text-[#555555]">Pauhex Systems, Inc.</strong><br />
                            123 Innovation Way<br />
                            Palo Alto, CA 94304<br />
                            United States
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Represented By</h2>
                        <p className="text-[#707070] font-light leading-relaxed">
                            CEO: Dr. James Paxton
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Contact</h2>
                        <p className="text-[#707070] font-light leading-relaxed">
                            Phone: +1 (650) 555-0123<br />
                            Email: contact@pauhex.com<br />
                            Website: www.pauhex.com
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Registration</h2>
                        <p className="text-[#707070] font-light leading-relaxed">
                            Incorporated in Delaware, USA<br />
                            File Number: 7891011
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Content Responsibility</h2>
                        <p className="text-[#707070] font-light leading-relaxed">
                            Responsible for content:<br />
                            Pauhex Systems, Inc.<br />
                            Marketing Department<br />
                            123 Innovation Way<br />
                            Palo Alto, CA 94304
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
