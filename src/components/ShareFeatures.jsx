import { useState } from "react";
import AnimatedArrow from "./AnimatedArrow";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
    {
        icon: (
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
                <path d="M8 4v16" />
                <path d="M16 4v16" />
                <path d="M4 8h16" />
                <path d="M4 16h16" />
            </svg>
        ),
        text: "Automate routine tasks to boost your efficiency and productivity while saving valuable time for other activities.",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 3v2" />
                <path d="M12 19v2" />
                <path d="M3 12h2" />
                <path d="M19 12h2" />
                <circle cx="12" cy="12" r="5" />
            </svg>
        ),
        text: "Seamlessly synchronize data across all your devices, ensuring effortless access to information.",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 12h16M4 12l4-4M4 12l4 4" />
            </svg>
        ),
        text: "Control and monitor your smart home devices from a single, intuitive interface, simplifying your daily interactions.",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        text: "Receive personalized notifications and reminders tailored to your schedule, keeping you organized and on track.",
    },
];

// Animation variants
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ShareFeatures = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                {/* Left Content */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Share your photos
                        <br className="hidden md:block" /> with friends easily
                    </h2>

                    <motion.ul
                        className="space-y-6"
                        initial="hidden"
                        whileInView="show"
                        variants={containerVariants}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        {features.map((item, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-4"
                                variants={itemVariants}
                            >
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <p className="text-gray-600">{item.text}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Button */}
                    <div className="p-10">
                        <Link
                            to="/contactus"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="inline-flex items-center px-6 py-3 border border-[#6C4CF1] text-purple-600 text-sm font-medium rounded-full hover:bg-[#6C4CF1] hover:text-white transition"
                        >
                            Learn More
                            <AnimatedArrow isHovered={hovered} />
                        </Link>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <img
                        src="/shareapp.png"
                        alt="App Interface"
                        className="w-full max-w-sm md:max-w-xs lg:max-w-md mx-auto object-contain img"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default ShareFeatures;
