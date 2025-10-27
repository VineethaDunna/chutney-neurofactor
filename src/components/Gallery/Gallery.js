import React, { useRef, useEffect } from "react";
import "./Gallery.css";

const images = [
	require("../../assets/1.png"),
	require("../../assets/2.png"),
	require("../../assets/3.png"),
	require("../../assets/4.png"),
];

export default function Gallery() {
	const scrollRef = useRef(null);

	// Infinite scroll effect
	useEffect(() => {
		const scroller = scrollRef.current;
		let animationFrame;
		let start = Date.now();

		function scrollStep() {
			if (!scroller) return;
			// Scroll left by 1px per frame for smoothness
			scroller.scrollLeft += 1;
			// Loop back if at end
			if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
				scroller.scrollLeft = 0;
			}
			animationFrame = requestAnimationFrame(scrollStep);
		}
		animationFrame = requestAnimationFrame(scrollStep);
		return () => cancelAnimationFrame(animationFrame);
	}, []);

	// Duplicate images for seamless infinite scroll
	const allImages = [...images, ...images];

	return (
		<section className='gallery-carousel-bg'>
			<div className='gallery-title'>OUR GALLERY</div>
			<div className='gallery-carousel-outer'>
				<div className='gallery-carousel-inner' ref={scrollRef}>
					{allImages.map((img, idx) => (
						<div className='gallery-image-container' key={idx}>
							<img src={img} alt={`Gallery ${(idx % images.length) + 1}`} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
