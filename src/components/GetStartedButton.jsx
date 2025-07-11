import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, className = '', ...props }) => {
    return (
        <Link to="/billing">
        <button
            className={`group relative bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3 overflow-hidden ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>

            {/* Larger arrow */}
            <span className="relative z-10 overflow-hidden w-6 h-6 inline-block">
                <span className="inline-block group-hover:animate-arrow-move transition-transform duration-300 text-xl">
                    →
                </span>
            </span>
        </button>
        </Link>

    );
};

export default Button;
