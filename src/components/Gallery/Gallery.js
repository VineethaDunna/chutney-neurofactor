import React, { useRef, useState } from "react";
import "./Gallery.css";

const images = [
    require("../../assets/1.png"),
    require("../../assets/2.png"),
    require("../../assets/3.png"),
    require("../../assets/4.png"),
];

export default function Gallery() {
    const [currentIdx, setCurrentIdx] = useState(0);

    // Move to next/previous image, wrap around if needed
    const prev = () => setCurrentIdx((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setCurrentIdx((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <section className="gallery-carousel-bg">
            <div className="gallery-title">OUR GALLERY</div>
            <div className="gallery-carousel-wrapper">
                <button
                    className="gallery-arrow left"
                    onClick={prev}
                    aria-label="Previous"
                >
                    &lt;
                </button>
                <div className="gallery-image-slide">
                    <img
                        src={images[currentIdx]}
                        alt={`Gallery ${currentIdx + 1}`}
                        className="carousel-img"
                    />
                </div>
                <button
                    className="gallery-arrow right"
                    onClick={next}
                    aria-label="Next"
                >
                    &gt;
                </button>
            </div>
        </section>
    );
}
