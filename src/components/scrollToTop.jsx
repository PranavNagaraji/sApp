import { useEffect, useState, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import clsx from 'clsx'; // Optional: for cleaner class logic

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    const lastScrollY = useRef(0);
    const timeoutId = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show on scroll up
            if (currentScrollY < lastScrollY.current && currentScrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }

            lastScrollY.current = currentScrollY;

            // Show briefly when scroll stops
            if (timeoutId.current) clearTimeout(timeoutId.current);
            timeoutId.current = setTimeout(() => {
                if (window.scrollY > 300) setVisible(true);
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId.current);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={clsx(
                'fixed bottom-5 right-5 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 transform',
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
            )}
        >
            <FaArrowUp size={20} />
        </button>
    );
};

export default ScrollToTopButton;
