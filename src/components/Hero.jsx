import React from 'react';
import { motion } from 'framer-motion';
import Button from './GetStartedButton';

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const phoneVariants = {
    hidden: { x: '-50%', opacity: 0, scale: 0.8 },
    show: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, ease: 'easeOut' },
    },
};

const Hero = () => {
    return (
        <section id="hero" className="mt-20 relative min-h-screen flex items-center overflow-hidden bg-white">
            {/* Animated Diagonal Purple Background */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute top-0 right-0 w-full h-full md:w-1/2 bg-[#6C3BFF] origin-left z-0"
                style={{
                    clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
                }}
            />

            <motion.div
                className="relative z-10 max-w-7xl w-full mx-auto px-6 grid md:grid-cols-2 items-center"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Text Content */}
                <div className="text-black space-y-4">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold leading-tight"
                        variants={itemVariants}
                    >
                        Creative way to <br /> Showcase your App
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 text-lg max-w-md"
                        variants={itemVariants}
                    >
                        Present your app in a unique and engaging manner with sApp, designed to highlight its features and attract potential users effectively.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <a href="#pricing">
                            <Button>Get Started</Button>
                        </a>
                    </motion.div>
                </div>

                {/* Phone Animation - from middle-left to right */}
                <motion.div
                    className="flex justify-center md:justify-end"
                    variants={phoneVariants}
                >
                    <img
                        src="/homepic.png"
                        alt="Phone"
                        className="w-72 md:w-96 object-contain"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
