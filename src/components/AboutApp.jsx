import { motion } from 'framer-motion';

const AboutApp = () => {
    const features = [
        "Utilize integrated messaging features to ensure seamless communication with clients at any time.",
        "Schedule video calls and meetings directly within the app for efficient discussions and feedback.",
        "Share project updates and documents in real-time to keep clients informed and engaged.",
        "Track client interactions and communication history for better relationship management and follow-ups.",
    ];

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

    return (
        <section id="about" className="py-24 bg-gray-50 font-sans">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                {/* Left Image */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <img
                        src="/workfaster.png"
                        alt="App Screenshot"
                        className="w-full max-w-sm md:max-w-xs lg:max-w-md mx-auto object-contain"
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        Work faster with <br />
                        powerful tools.
                    </h2>

                    {/* List of features with stagger animation */}
                    <motion.ul
                        className="space-y-5"
                        initial="hidden"
                        whileInView="show"
                        variants={containerVariants}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        {features.map((point, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-3 text-base text-gray-700"
                                variants={itemVariants}
                            >
                                <span className="material-symbols-outlined text-purple-600 text-2xl mt-0.5">
                                    check_circle
                                </span>
                                <span>{point}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Bottom 3 feature icons */}
                    <div className="mt-10 flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-md shadow-md bg-white">
                            <span className="material-symbols-outlined text-purple-600 text-3xl">
                                open_in_full
                            </span>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center rounded-md shadow-md bg-white">
                            <span className="material-symbols-outlined text-purple-600 text-3xl">
                                tune
                            </span>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center rounded-md shadow-md bg-white">
                            <span className="material-symbols-outlined text-purple-600 text-3xl">
                                arrow_forward
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutApp;
