import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleHover = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
    };

    return (
        <section id="contact" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Tuned</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto border-b-4 border-purple-500 pb-1 inline-block">
                        Keep an eye out for exciting news and updates from the app, as we continue to enhance your experience and introduce new features.
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Schedule a call with us to see if we can help
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Whether you’re looking to start a new project or simply want to chat, feel free to reach out to us!
                        </p>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-600 text-white p-3 rounded-md">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <span className="text-gray-800 font-medium">+1.890.473.5102</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-600 text-white p-3 rounded-md">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="text-gray-800 font-medium">hello@yourmail.com</span>
                            </div>

                            {/* Location */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-600 text-white p-3 rounded-md">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <span className="text-gray-800 font-medium">
                                    912 Park Ave, Ketchikan, Alaska 99901, USA
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                        <form className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 text-gray-800 box-border"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 text-gray-800 box-border"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 text-gray-800 box-border"
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Message"
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 text-gray-800 box-border"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                onMouseEnter={handleHover}
                                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-6 rounded-full hover:opacity-90 transition w-full flex items-center justify-center space-x-2"
                            >
                                Subscribe
                                <ArrowRight className={`transition-transform ${isAnimating ? "animate-arrow-move" : ""}`} size={22} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
