import React from 'react';
import { motion } from 'framer-motion';

const DownloadPage = () => {
    return (
        <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 md:px-20">
            {/* Background animation */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="absolute inset-0 bg-[#4B2DB4] origin-left z-0"
            />

            {/* Container for content */}
            <div className="relative z-10 flex items-center max-w-7xl w-full">
                {/* Text content aligned left */}
                <div className="text-white max-w-xl text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Your download should begin automatically
                    </h1>
                    <p className="text-sm md:text-base">
                        If it doesn’t start automatically, please click here to download manually.
                    </p>
                </div>

                {/* Spacer between text and image */}
                <div className="w-12" />

                {/* Phone image with margin so it doesn't touch the text */}
                <motion.img
                    src="/homepic.png"
                    alt="Mobile"
                    initial={{ x: '-50%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="w-64 md:w-96"
                />
            </div>
        </div>
    );
};

export default DownloadPage;
