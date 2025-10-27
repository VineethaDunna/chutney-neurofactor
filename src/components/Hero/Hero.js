import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero.png"; // Your hero background

// Update paths for logo and assets as needed
const logo = "/icons/logo1.png";

const Hero = () => {
	return (
		<section className='hero'>
			<img src={heroImage} alt='Chutnee Hero' className='hero-img' />

			{/* Overlay - dark gradient for foreground text visibility */}
			<div className='hero-overlay' />

			{/* Top inline menu + logo */}
			<div className='hero-top-bar'>
				<div className='hero-logo'>
					<img src={logo} alt='Chutnee Logo' />
					<span>CHUTNÉE</span>
				</div>
				<ul className='hero-top-links'>
					<li>
						<a href='#ourstory'>OUR STORY</a>
					</li>
					<li>
						<a href='#menu'>MENU</a>
					</li>
					<li>
						<a href='#afternoontea'>AFTERNOON TEA</a>
					</li>
					<li>
						<a href='#events'>EVENTS</a>
					</li>
					<li>
						<a href='#family'>CHUTNÉE FAMILY</a>
					</li>
					<li>
						<a href='#contact'>CONTACT</a>
					</li>
					<li>
						<a href='#reservation' className='hero-reserve'>
							RESERVATION <span className='arrow'>›</span>
						</a>
					</li>
				</ul>
			</div>

			{/* Hero main content */}
			<div className='hero-content'>
				<h1>
					WELCOME TO
					<br />
					CHUTNEE
				</h1>
				<div className='hero-buttons'>
					<button className='btn view'>
						VIEW MENU <span className='arrow'>›</span>
					</button>
					<button className='btn book'>
						BOOK A TABLE <span className='arrow'>›</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
