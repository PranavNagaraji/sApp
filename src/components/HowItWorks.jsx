import { motion } from "framer-motion";

const HowItWorks = () => {
    const steps = [
        {
            title: "Install the App",
            description:
                "Easily download and install the app from your preferred app store to begin your journey and access all its exciting features.",
            icon: <img src="/step-1.png" alt="Install the App" className="w-16 h-16 mx-auto" />,
        },
        {
            title: "Setup your profile",
            description:
                "Create and customize your profile to tailor your experience and connect with others quickly and effortlessly, ensuring a seamless journey.",
            icon: <img src="/step-2.png" alt="Setup your profile" className="w-16 h-16 mx-auto" />,
        },
        {
            title: "Enjoy the features!",
            description:
                "Utilize the app's powerful features designed to enhance your experience and productivity, helping you achieve more with ease.",
            icon: <img src="/step-3.png" alt="Enjoy the features" className="w-16 h-16 mx-auto" />,
        },
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
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="bg-[#6C4CF1] text-white w-full min-h-screen flex items-center justify-center py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">How sApp works?</h2>
                <p className="text-lg mb-16 max-w-2xl mx-auto">
                    Explore the intuitive and powerful features of sApp, making it easy to build, customize, and launch effective landing pages in just a few steps.
                </p>

                <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative flex flex-col items-center text-center max-w-xs group"
                            variants={itemVariants}
                        >
                            <div className="mb-6">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-sm leading-relaxed">{step.description}</p>

                            {index < steps.length - 1 && (
                                <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 hidden md:block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
