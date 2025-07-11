import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import {
    AppWindow,
    MessagesSquare,
    ShieldCheck,
    MapPin,
    Settings,
    Languages,
} from 'lucide-react';

const features = [
    {
        title: 'Fully Functional',
        description: 'Enjoy a complete suite of features designed for seamless user experiences.',
        icon: <AppWindow className="w-12 h-12 text-blue-900 mx-auto" />,
    },
    {
        title: 'Live Chat',
        description: 'Connect with your audience in real-time for instant support and engagement.',
        icon: <MessagesSquare className="w-12 h-12 text-blue-900 mx-auto" />,
    },
    {
        title: 'Secure Data',
        description: 'Protect your information with industry-leading security measures and encryption.',
        icon: <ShieldCheck className="w-12 h-12 text-blue-900 mx-auto" />,
    },
    {
        title: 'Location Tracking',
        description: 'Gain insights into user behavior with advanced location tracking capabilities.',
        icon: <MapPin className="w-12 h-12 text-blue-900 mx-auto" />,
    },
    {
        title: 'Powerful Settings',
        description: 'Take control with robust settings that allow for personalized app configurations.',
        icon: <Settings className="w-12 h-12 text-blue-900 mx-auto" />,
    },
    {
        title: 'Multiple Language',
        description: 'Reach a wider audience with support for multiple languages and localization options.',
        icon: <Languages className="w-12 h-12 text-blue-900 mx-auto" />,
    },
];



// Staggered container variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

// Slide up + fade in variants
const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};

const Features = () => {
    const ref = useRef(null);
    // Added margin to trigger a bit earlier (optional)
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="features" className="py-20 bg-gray-50" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Explore Premium Features</h2>
                    <p className="mt-4 text-gray-600">
                        Discover the unique features of sApp that set it apart from the competition, designed to deliver unmatched performance and seamless user experiences.
                    </p>
                </div>

                {isInView && (
                    <motion.div
                        className="grid gap-10 md:grid-cols-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="bg-white rounded-lg p-6 text-center shadow hover:shadow-lg transition duration-300 group"
                            >
                                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Features;
