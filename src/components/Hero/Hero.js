import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero.png";

const Hero = () => {
	return (
		<section className='hero'>
			<img src={heroImage} alt='Chutnee Hero' className='hero-img' />
			<div className='hero-content'>
				<h1>
					WELCOME TO <br /> CHUTNEE
				</h1>
				<div className='hero-buttons'>
					<button className='btn view'>VIEW MENU</button>
					<button className='btn book'>BOOK A TABLE</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
