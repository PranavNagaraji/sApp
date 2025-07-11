import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./CustomerCarousel.css";
import { motion } from "framer-motion";

const customers = [
    {
        name: "Sarah Johnson",
        role: "Product Designer",
        quote: "This app transformed how we manage projects. Everything is so intuitive!",
        image: "/customers/customer_1.jpg",
        rating: 4.5,
    },
    {
        name: "Michael Lee",
        role: "Software Engineer",
        quote: "A must-have for teams looking for better collaboration tools.",
        image: "/customers/customer_2.avif",
        rating: 4.7,
    },
    {
        name: "Aisha Brown",
        role: "Marketing Lead",
        quote: "Sleek, powerful, and extremely user-friendly. Love it!",
        image: "/customers/customer_3.jpeg",
        rating: 4.8,
    },
    {
        name: "Daniel Kim",
        role: "CTO, NovaTech",
        quote: "We increased productivity by 40% since switching. Highly recommended!",
        image: "/customers/customer_4.jpg",
        rating: 4.6,
    },
    {
        name: "Emma Davis",
        role: "Freelancer",
        quote: "Finally, a tool that doesn’t feel bloated but still does everything I need.",
        image: "/customers/customer_5.jpg",
        rating: 4.3,
    },
];

function renderStars(rating) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={`full-${i}`} className="text-yellow-400">★</span>);
    }
    if (halfStar) {
        stars.push(<span key="half" className="text-yellow-400">☆</span>); // Or use a half star SVG if you want
    }
    for (let i = stars.length; i < totalStars; i++) {
        stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }
    return stars;
}

export default function CustomerCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 1,
            spacing: 16,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    // Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            if (instanceRef.current) {
                instanceRef.current.next();
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <section className="carousel-section">
            <div className="carousel-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    {customers.map((user, idx) => {
    const isActive = currentSlide === idx;

    return (
        <div
            className="keen-slider__slide customer-slide flex justify-center"
            key={idx}
        >
            <div className="testimonial-card w-64 text-center p-4 bg-white rounded-xl shadow-md">
                {/* Image */}
                {isActive ? (
                    <motion.img
                        key={currentSlide}
                        src={user.image}
                        alt={user.name}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            damping: 10,
                            duration: 0.8,
                        }}
                        className="avatar w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                    />
                ) : (
                    <img
                        src={user.image}
                        alt={user.name}
                        className="avatar w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                    />
                )}

                {/* Job */}
                <p className="role text-sm text-gray-500 mb-2">{user.role}</p>

               {/* Rating */}
                <div className="rating mb-3 flex justify-center items-center gap-1 text-yellow-400 text-lg">
                {isActive ? (
                    <motion.div
                    key={currentSlide}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 10,
                        duration: 0.8,
                    }}
                    className="flex"
                    >
                    {renderStars(user.rating)}
                    </motion.div>
                ) : (
                    <div className="flex">
                    {renderStars(user.rating)}
                    </div>
                )}
                </div>

                {/* Feedback */}
                <p className="quote text-gray-700 italic">“{user.quote}”</p>
            </div>
        </div>
    );
})}

                </div>

                {loaded && instanceRef.current && (
                    <div className="slider-bars flex justify-center gap-2 mt-4">
                        {customers.map((_, idx) => (
                            <span
                                key={idx}
                                className={`bar h-1.5 w-6 rounded cursor-pointer transition-all duration-300 ${currentSlide === idx ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                                onClick={() => {
                                    const absoluteIdx = idx + instanceRef.current.track.details.start;
                                    instanceRef.current.moveToIdx(absoluteIdx, true);
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
