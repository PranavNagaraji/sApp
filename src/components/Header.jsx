import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchPanel from './SearchPanel';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [desktopPagesOpen, setDesktopPagesOpen] = useState(false);
    const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [showHeader, setShowHeader] = useState(true);

    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';

    const handleNavigateToSection = (hash) => {
        navigate('/');
        setTimeout(() => {
            window.location.hash = hash;
        }, 0);
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentY = window.scrollY;

            // Show header if scrolling up or near the top
            if (currentY < lastScrollY || currentY < 10) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }

            // Blur background if scrolled
            setHasScrolled(currentY > 0);
            lastScrollY = currentY;

            // Close dropdown
            setDesktopPagesOpen(false);
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDesktopPagesOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <header
                className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'
                    } ${isHome && !hasScrolled
                        ? 'bg-transparent backdrop-blur-none'
                        : 'bg-white/40 backdrop-blur-md shadow-md'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="cursor-pointer">
                            <img
                                className="h-[40px] w-[40px] object-contain sm:h-[45px] sm:w-[45px]"
                                src="/logo.png"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-gray-800 text-[16px] font-medium">
                        <Link to="/" className="hover:text-purple-600" onClick={() => handleNavigateToSection('#hero')}>Home</Link>
                        <Link to="/" className="hover:text-purple-600" onClick={() => handleNavigateToSection('#features')}>Features</Link>

                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setDesktopPagesOpen(!desktopPagesOpen)}
                                className="hover:text-purple-600 flex items-center gap-1"
                            >
                                Pages
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {desktopPagesOpen && (
                                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-[9999]">
                                    <Link to="/downloadpage" className="block px-4 py-2 hover:bg-gray-100">Download</Link>
                                    <Link to="/signinpage" className="block px-4 py-2 hover:bg-gray-100">Sign In</Link>
                                    <Link to="/billing" className="block px-4 py-2 hover:bg-gray-100">Billing</Link>
                                    <Link to="/contactus" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link>
                                </div>
                            )}
                        </div>

                        <Link to="/" className="hover:text-purple-600" onClick={() => handleNavigateToSection('#screenshots')}>Screenshots</Link>
                        <Link to="/" className="hover:text-purple-600" onClick={() => handleNavigateToSection('#pricing')}>Pricing</Link>
                        <Link to="/" className="hover:text-purple-600" onClick={() => handleNavigateToSection('#contact')}>Contact</Link>
                    </nav>

                    {/* Search Button */}
                    <div className="hidden md:block">
                        <button onClick={() => setSearchOpen(true)} className="hover:text-purple-600 transition">
                            <img className="w-[22px] h-[22px]" src="/search.svg" alt="Search" />
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-gray-800"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden px-6 pb-4 bg-white/90 backdrop-blur-md shadow space-y-2 text-gray-700">
                        <Link to="/" className="block py-2 hover:text-purple-600" onClick={() => handleNavigateToSection('#hero')}>Home</Link>
                        <Link to="/" className="block py-2 hover:text-purple-600" onClick={() => handleNavigateToSection('#features')}>Features</Link>

                        <div className="space-y-1">
                            <button
                                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                                className="block py-2 w-full text-left hover:text-purple-600"
                            >
                                Pages
                            </button>
                            {mobilePagesOpen && (
                                <div className="pl-4 space-y-1">
                                    <Link to="/downloadpage" className="block py-1 hover:text-purple-600">Download</Link>
                                    <Link to="/signinpage" className="block py-1 hover:text-purple-600">Sign In</Link>
                                    <Link to="/billing" className="block py-1 hover:text-purple-600">Billing</Link>
                                    <Link to="/contactus" className="block py-1 hover:text-purple-600">Contact Us</Link>
                                </div>
                            )}
                        </div>

                        <Link to="/" className="block py-2 hover:text-purple-600" onClick={() => handleNavigateToSection('#screenshots')}>Screenshots</Link>
                        <Link to="/" className="block py-2 hover:text-purple-600" onClick={() => handleNavigateToSection('#pricing')}>Pricing</Link>
                        <Link to="/" className="block py-2 hover:text-purple-600" onClick={() => handleNavigateToSection('#contact')}>Contact</Link>

                        <button
                            onClick={() => setSearchOpen(true)}
                            className="w-full py-2 flex justify-center items-center bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                        >
                            <img src="/search.svg" alt="Search" className="w-[20px] h-[20px]" />
                        </button>
                    </div>
                )}
            </header>

            <SearchPanel isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </>
    );
};

export default Header;
