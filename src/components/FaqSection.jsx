import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How to install sApp?",
        answer: (
            <>
                To install sApp, follow the{" "}
                <a className="text-purple-600">step-by-step instructions</a>{" "}
                in the provided documentation. It covers everything you need to set up and customize the theme effortlessly.
            </>
        ),
    },
    {
        question: "How can I edit my personal information?",
        answer: "You can edit your personal info from your profile settings page after logging in.",
    },
    {
        question: "Do you have a free trial?",
        answer: "Yes, we offer a 14-day free trial with full access to all features.",
    },
    {
        question: "Can I get support from the Author?",
        answer: "Absolutely. Our support team is available through the contact form or support ticket system.",
    },
    {
        question: "Contact form isn't working?",
        answer: "Please ensure all required fields are filled. If the problem persists, reach out to support@example.com.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(prev => (prev === index ? -1 : index));
    };

    return (
        <section className="py-20 px-4 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-10">
                Find answers to the most common questions, covering everything from setup to advanced features, to help you get the most out of the platform.
            </p>

            <div className="space-y-4 text-left">
                {faqs.map((faq, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <div key={index} className="bg-blue-50 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-6 py-4 font-medium text-left text-lg focus:outline-none"
                            >
                                {faq.question}
                                <motion.div
                                    className="relative w-6 h-6"
                                    initial={false}
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    {/* Vertical Line */}
                                    <motion.span
                                        className="absolute inset-0 w-1 h-full bg-gray-600 left-1/2 transform -translate-x-1/2"
                                        animate={{ opacity: isOpen ? 0 : 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                    {/* Horizontal Line (always visible) */}
                                    <span className="absolute inset-0 h-1 w-full bg-gray-600 top-1/2 transform -translate-y-1/2" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                    >
                                        <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
