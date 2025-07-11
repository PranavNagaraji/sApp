import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Pricing = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("animate");
        }
    }, [controls, inView]);

    const pricingPlans = [
        {
            name: "Basic",
            price: "$49",
            features: [
                "5GB Linux Web Space",
                "5 MySQL Databases",
                "24/7 Tech Support",
                "Daily Backups"
            ],
            icon: (
                <img src="/basic.png" alt="Basic Plan" className="w-12 h-12 mx-auto mb-4" />
            ),
        },
        {
            name: "Pro",
            price: "$129",
            features: [
                "10GB Linux Web Space",
                "50 MySQL Databases",
                "Unlimited Email",
                "Daily Backups"
            ],
            icon: (
                <img src="/premium.png" alt="Pro Plan" className="w-12 h-12 mx-auto mb-4" />
            ),
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-[#f6faff]">
            <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Unlock Full Power Of sApp</h2>
                <p className="text-gray-600 mb-12">
                    Maximize your potential by unlocking advanced features and tools that give you
                    complete control over your landing page designs and performance.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {pricingPlans.map((plan, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-lg transition"
                            ref={ref}
                            style={{
                                position: "relative",
                                left: inView ? "0%" : idx % 2 === 0 ? "-100%" : "100%",
                                opacity: inView ? 1 : 0,
                                transition: "left 1.8s ease, opacity 1.8s ease",
                                zIndex: inView ? 1 : 0
                            }}
                        >
                            {plan.icon}
                            <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">{plan.name}</h3>
                            <p className="text-4xl font-bold text-purple-600 mt-2 mb-6">{plan.price}</p>

                            <ul className="text-gray-700 space-y-3 mb-6 border-t pt-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>

                            <Link to="/signinpage">
                                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-gray-600">
                    Not sure what to choose?{" "}
                    <Link to="/contactus" className="text-purple-600 underline hover:text-purple-700">
                        Contact Us
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Pricing;
