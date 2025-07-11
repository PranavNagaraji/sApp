import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import SocialIcon from './SocialIcon';

const UsefulLinks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '0px 0px -200px 0px', once: false });

    return (
        <div ref={ref}>
            <motion.footer
                initial={false}
                animate={{
                    clipPath: isInView ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
                }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="bg-white py-16 px-6 sm:px-10 lg:px-20 border-t border-gray-200 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo + Description + Socials */}
                    <div>
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="mb-6 w-14 h-14 object-contain"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src =
                                    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="purple"><rect width="56" height="56" rx="8"/></svg>';
                            }}
                        />
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                            The Next-Level Solutions for Landing Pages. Perfect Touch Enhances your Business.
                        </p>
                        <div className="flex space-x-3 mt-6">
                            <SocialIcon Icon={Facebook} href="#" />
                            <SocialIcon Icon={Twitter} href="#" />
                            <SocialIcon Icon={Linkedin} href="#" />
                            <SocialIcon Icon={Github} href="#" />
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-6 text-lg">Useful Links</h3>
                        <ul className="text-gray-600 space-y-3 text-sm">
                            {['Home', 'About Us', 'Services', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-purple-600 transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Help */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-6 text-lg">Product Help</h3>
                        <ul className="text-gray-600 space-y-3 text-sm">
                            {['FAQ', 'Privacy Policy', 'Support', 'Terms & Conditions', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-purple-600 transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-6 text-lg">Download</h3>
                        <div className="mb-4 space-y-4">
                            <Link to="/downloadpage">
                                <img
                                    src="/google_play.png"
                                    alt="Google Play"
                                    className="w-40 h-auto rounded-xl"
                                />
                            </Link>
                        </div>
                        <div className="space-y-4">
                            <Link to="/downloadpage">
                                <img
                                    src="/appstore.png"
                                    alt="App Store"
                                    className="w-40 h-auto rounded-xl"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </div>
    );
};

export default UsefulLinks;
