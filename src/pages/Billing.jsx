import React from 'react';
import Pricing from '../components/Pricing';
import FAQSection from '../components/FaqSection';
import UsefulLinks from '../components/UsefulLinks';

const BillingPage = () => {
    return (
        <main className="bg-[#f6faff]">
            {/* Hero Section */}
            <section className="relative w-full bg-[#6C4CF1] py-24 text-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/banner-bg.jpg" // Replace with your background image path
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-[#6C4CF1] opacity-90"></div>
                </div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-4">Our Price Plan</h1>
                    <p className="text-lg">
                        <span className="opacity-90">Home</span>
                        <span className="mx-2">›</span>
                        <span className="opacity-90">Pages</span>
                        <span className="mx-2">›</span>
                        <span className="opacity-100 font-semibold">Pricing</span>
                    </p>
                </div>
            </section>

            {/* Other Sections */}
            <Pricing />
            <FAQSection />
            <UsefulLinks />
        </main>
    );
};

export default BillingPage;
