import React, { useState, useEffect } from "react";
import "./BestSellers.css";

const BestSellers = () => {
	const [currentIndex, setCurrentIndex] = useState(2); // Start with CHAI in center
	const [isPaused, setIsPaused] = useState(false);

	const offers = [
		{ label: "BREAKFAST", img: "breakfast.png", bg: "backbreak.png" },
		{ label: "STREET FOOD", img: "streetfood.png", bg: "backstreet.png" },
		{ label: "DESSERTS", img: "desserts.png", bg: "backdesserts.png" },
		{ label: "CHAI", img: "chaii.png", bg: "backchai.png" },
		{ label: "HOT DRINKS", img: "hotdrinks.png", bg: "backhot.png" },
		{ label: "COLD DRINKS", img: "colddrinks.png", bg: "backcold.png" },
	];

	// Auto-play functionality
	useEffect(() => {
		if (!isPaused) {
			const interval = setInterval(() => {
				setCurrentIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
			}, 3000); // Change slide every 3 seconds

			return () => clearInterval(interval);
		}
	}, [isPaused, offers.length]);

	const handlePrev = () => {
		setIsPaused(true);
		setCurrentIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
		setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
	};

	const handleNext = () => {
		setIsPaused(true);
		setCurrentIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
		setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
	};

	const getVisibleItems = () => {
		const items = [];
		for (let i = -1; i <= 1; i++) {
			const index = (currentIndex + i + offers.length) % offers.length;
			items.push({ ...offers[index], position: i });
		}
		return items;
	};

	return (
		<div
			className='bestsellers-container'
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}>
			<h1 className='bestsellers-title'>BEST SELLERS</h1>

			<div className='carousel-wrapper'>
				<button
					className='carousel-arrow carousel-arrow-left'
					onClick={handlePrev}>
					‹
				</button>

				<div className='carousel-track'>
					{getVisibleItems().map((item, idx) => (
						<div
							key={idx}
							className={`carousel-item ${
								item.position === 0 ? "active" : ""
							} ${
								item.position === -1
									? "left"
									: item.position === 1
									? "right"
									: ""
							}`}>
							<div className='item-background'>
								<img
									src={item.position===0?require(`../../assets/bestseller1.png`):require(`../../assets/bestseller2.png`)}
									alt=''
									className='background-shape'
								/>
							</div>
							<img
								src={require(`../../assets/${item.img}`)}
								alt={item.label}
								className='item-image'
							/>
						</div>
					))}
				</div>

				<button
					className='carousel-arrow carousel-arrow-right'
					onClick={handleNext}>
					›
				</button>
			</div>

			<h2 className='item-label'>{offers[currentIndex].label}</h2>

			<button className='view-menu-btn'>
				VIEW MENU <span className='arrow-icon'>→</span>
			</button>
		</div>
	);
};

export default BestSellers;
