import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const SocialIcon = ({ Icon, href = '#' }) => {
    const controls = useAnimation();

    const handleMouseEnter = () => {
        controls.start({
            y: [0, -30, 30, 0],
            opacity: [1, 0, 0, 1],
            transition: { duration: 0.6, ease: 'easeInOut' },
        });
    };

    const handleMouseLeave = () => {
        controls.start({
            y: [0, 30, -30, 0],
            opacity: [1, 0, 0, 1],
            transition: { duration: 0.6, ease: 'easeInOut' },
        });
    };

    return (
        <motion.a
            href={href}
            className="bg-purple-500 p-2 rounded hover:bg-purple-600 transition inline-flex items-center justify-center w-10 h-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div animate={controls}>
                <Icon className="text-white w-4 h-4" />
            </motion.div>
        </motion.a>
    );
};

export default SocialIcon;
