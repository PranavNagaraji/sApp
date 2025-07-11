import React from 'react';

const SearchPanel = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-[99] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>

            {/* Panel */}
            <div
                className={`fixed top-0 right-0 h-full bg-white z-[100] transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    w-full sm:w-[400px]`}
            >
                {/* Close Button */}
                <div className="absolute top-6 right-6">
                    <button
                        onClick={onClose}
                        className="text-black text-2xl focus:outline-none"
                        aria-label="Close search panel"
                    >
                        &times;
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center items-center h-full px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                        What are you looking for?
                    </h2>
                    <input
                        type="text"
                        placeholder="Enter Keywords"
                        className="w-full border border-gray-300 rounded-md p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <button className="px-6 py-3 text-purple-600 border border-purple-600 rounded hover:bg-purple-600 hover:text-white transition">
                        Search
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchPanel;
