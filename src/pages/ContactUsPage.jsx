import React from 'react';
import UsefulLinks from '../components/UsefulLinks';

const ContactUsPage = () => {
    return (
        <main>

            {/* Hero Section */}
            <section className="bg-purple-700 text-white py-24 relative">
                <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-white text-sm">
                        <span className="text-white opacity-80">Home</span> &gt; <span className="text-white opacity-90">Pages</span> &gt; <span className="font-medium">Contact</span>
                    </p>
                </div>
                <div className="absolute inset-0 bg-purple-800 opacity-50 z-0"></div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Schedule a call with us to see if we can help
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Whether you’re looking to start a new project or simply want to chat, feel free to reach out to us!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-600 text-white p-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59-1.35 2.45A1 1 0 008 17h10a1 1 0 000-2H8.42l.94-1.68L14 5H3z" />
                                    </svg>
                                </div>
                                <span className="text-gray-800 font-medium">+1.890.473.5102</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-600 text-white p-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0v4m0-4V8m8 4v4m0-4V8m0 4H8" />
                                    </svg>
                                </div>
                                <span className="text-gray-800 font-medium">hello@yourmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-600 text-white p-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 4.75 7 13 7 13s7-8.25 7-13c0-3.87-3.13-7-7-7z" />
                                        <circle cx="12" cy="9" r="2.5" />
                                    </svg>
                                </div>
                                <span className="text-gray-800 font-medium">
                                    912 Park Ave, Ketchikan, Alaska 99901, USA
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-lg shadow-lg p-6 md:p-8">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full border border-gray-300 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500"
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Message"
                                className="w-full border border-gray-300 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-6 rounded-full hover:opacity-90 transition w-full flex items-center justify-center space-x-2"
                            >
                                <span>Submit Message</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="w-full h-[400px] md:h-[500px]">
                <iframe
                    title="Bangalore Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8883001067223!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c39a839f%3A0xe6d9f1b8a4cf0bb9!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1716368378896!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                ></iframe>
            </section>

            {/* Footer */}
            <UsefulLinks />
        </main>
    );
};

export default ContactUsPage;
