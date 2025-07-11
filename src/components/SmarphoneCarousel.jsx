import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./SmartphoneCarousel.css";

const images = [
    { src: "/carousel_placeholders/placeholder_1.jpg" },
    { src: "/carousel_placeholders/placeholder_2.jpg" },
    { src: "/carousel_placeholders/placeholder_3.jpg" },
    { src: "/carousel_placeholders/placeholder_4.jpg" },
    { src: "/carousel_placeholders/placeholder_5.jpg" },
];

export default function SmartphoneCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 4,
            spacing: 16,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (instanceRef.current) {
                instanceRef.current.next();
            }
        }, 2500);
        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <section id="screenshots" className="carousel-section p-4">
            <div className="carousel-heading">
                <div className="label">✨ Awesome Interface</div>
                <h2 className="title">Simple & Beautiful Interface</h2>
                <p className="subtitle">
                    Clean and elegant interface with sApp that combines simplicity with beauty,
                    ensuring a smooth and enjoyable user journey.
                </p>
            </div>

            <div className="carousel-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    {images.map((img, idx) => (
                        <div className="keen-slider__slide" key={idx}>
                            <img src={img.src} alt={`Slide ${idx + 1}`} className="carousel-image" />
                        </div>
                    ))}
                </div>

                {loaded && instanceRef.current && (
                    <div className="slider-bars">
                        {images.map((_, idx) => (
                            <span
                                key={idx}
                                className={`bar ${currentSlide === idx ? "active" : ""}`}
                                onClick={() => instanceRef.current?.moveToIdx(idx)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
