'use client';

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="container max-w-4xl">
                <h1 className="text-4xl font-light text-[#003568] mb-8">Cookie Policy</h1>
                <div className="prose prose-lg text-gray-600">
                    <p>Pauhex uses cookies to enhance your browsing experience and ensure the functionality of our systems.</p>

                    <h3>Essential Cookies</h3>
                    <p>These are necessary for the website to function (e.g., login sessions, cart items).</p>

                    <h3>Analytics Cookies</h3>
                    <p>We use anonymous analytics to understand how users interact with our site to improve performance.</p>
                </div>
            </div>
        </div>
    );
}
