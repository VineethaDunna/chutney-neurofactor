import React from "react";
import "./Menu.css";
import personImage from "../../assets/person.png";
import dessertImage from "../../assets/dessert.png";
import muralImage from "../../assets/location.png";
import stickerLeft from "../../assets/sticker1.png";
import stickerRight from "../../assets/sticker2.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";

const Menu = () => {
	const reelImages = [img1, img2, img3, img4];

	const dishes = [
		{ img: require("../../assets/chicken.png"), label: "CHICKEN BURGER" },
		{ img: require("../../assets/panni.png"), label: "PANNI POORI" },
		{ img: require("../../assets/cake.png"), label: "CHOCOLATE CAKE" },
		{ img: require("../../assets/mango.png"), label: "MANGO SHAK" },
	];
	return (
		<>
			<section className='reserve-section'>
				<div className='reserve-overlay'></div>
				<div className='reserve-content'>
					<h1 className='reserve-title'>
						RESERVE YOUR
						<br />
						TABLE AT CHUTNÉE
					</h1>
					<p className='reserve-description'>
						Whether you're planning a cozy breakfast, a family dinner, or
						<br />
						a special catch-up with friends — we've got the perfect seat
						<br />
						waiting for you.
					</p>
					<button className='book-table-btn'>
						BOOK A TABLE <span className='btn-arrow'>›</span>
					</button>
				</div>
				<svg
					className='play-icon'
					width='89'
					height='89'
					viewBox='0 0 89 89'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<circle
						data-figma-bg-blur-radius='10.6'
						cx='44.2786'
						cy='44.2786'
						r='44.2786'
						fill='white'
					/>
					<path
						d='M38.2654 52.9985V36.3786C38.2654 35.9236 38.426 35.542 38.7471 35.2337C39.0683 34.9254 39.443 34.7718 39.8712 34.7728C40.005 34.7728 40.1458 34.7926 40.2935 34.8322C40.4412 34.8719 40.5815 34.9323 40.7142 35.0137L53.8013 43.3236C54.0422 43.4842 54.2231 43.6849 54.3441 43.9258C54.4651 44.1667 54.525 44.4209 54.5239 44.6885C54.5229 44.9562 54.4629 45.2104 54.3441 45.4513C54.2253 45.6922 54.0443 45.8929 53.8013 46.0535L40.7142 54.3634C40.5804 54.4437 40.4401 54.5042 40.2935 54.5448C40.1468 54.5855 40.006 54.6053 39.8712 54.6042C39.443 54.6042 39.0683 54.4501 38.7471 54.1418C38.426 53.8335 38.2654 53.4524 38.2654 52.9985Z'
						fill='#FE1795'
					/>
					<defs>
						<clipPath
							id='bgblur_0_890_44_clip_path'
							transform='translate(10.6 10.6)'>
							<circle cx='44.2786' cy='44.2786' r='44.2786' />
						</clipPath>
					</defs>
				</svg>
			</section>
			<section className='popular-bg'>
				<div className='popular-head'>
					<h2>MOST POPULAR DISHES</h2>
					<p>
						Get a taste of what everyone's talking about. These are the Chutnée
						favorites our guests keep coming back for:
					</p>
				</div>

				<div className='dishes-row'>
					<img
						src={require("../../assets/star9.png")}
						alt=''
						className='sticker'
					/>
					{dishes.map((dish) => (
						<div className='dish-item' key={dish.label}>
							<img src={dish.img} className='dish-img' alt={dish.label} />
							<div className='dish-label'>{dish.label}</div>
						</div>
					))}
				</div>
				<div className='popular-menu-btn-row'>
					<a href='#menu' className='popular-menu-btn'>
						VIEW MENU <span className='arrow'>{">"}</span>
					</a>
				</div>
			</section>

			<section className='about-bg'>
				<svg
					className='about-corner-art'
					width='112'
					height='112'
					viewBox='0 0 112 112'
					fill='none'>
					<path
						d='M2,30 Q20,2 45,20 Q68,37 60,60 Q37,70 25,100'
						stroke='#ffefdc'
						strokeWidth='8'
						fill='none'
					/>
				</svg>
				<div className='about-title'>
					<h2>ABOUT US</h2>
					<h3>LOVE ABOUT US</h3>
				</div>
				<div className='about-grid'>
					<div className='about-card about-card-text'>
						<div className='about-stars'>{"★".repeat(5)}</div>
						<div className='about-desc'>
							NuR Cafe brings Arabian warmth to Manchester with hearty
							breakfasts, French-inspired pastries, and halal dishes crafted
							with care. A luxurious experience awaits, whether for coffee or a
							full meal.
						</div>
						<div className='about-author'>Anu Ajit</div>
					</div>
					<div className='about-card about-card-img'>
						<img src={dessertImage} alt='Dessert' />
					</div>
					<div className='about-card about-card-text'>
						<div className='about-stars'>{"★".repeat(5)}</div>
						<div className='about-desc'>
							NuR Cafe brings Arabian warmth to Manchester with hearty
							breakfasts, French-inspired pastries, and halal dishes crafted
							with care. A luxurious experience awaits, whether for coffee or a
							full meal.
						</div>
						<div className='about-author'>Anu Ajit</div>
					</div>
					<div className='about-card about-card-img'>
						<img src={personImage} alt='Owner' />
					</div>

					<div className='about-card about-card-text'>
						<div className='about-stars'>{"★".repeat(5)}</div>
						<div className='about-desc'>
							NuR Cafe brings Arabian warmth to Manchester with hearty
							breakfasts, French-inspired pastries, and halal dishes crafted
							with care. A luxurious experience awaits, whether for coffee or a
							full meal.
						</div>
						<div className='about-author'>Anu Ajit</div>
					</div>
					<div className='about-card about-card-img'>
						<img src={muralImage} alt='Cafe Seating' />
					</div>
				</div>
			</section>

			<section className='reels-bg'>
				<img src={stickerLeft} alt='' className='reels-sticker sticker-left' />
				<img
					src={stickerRight}
					alt=''
					className='reels-sticker sticker-right'
				/>
				<div className='reels-title'>
					<h2>WATCH OUR REELS</h2>
					<p>
						Get a taste of what everyone’s talking about. These are the Chutnée
						favorites our guests keep coming back for:
					</p>
				</div>
				<div className='reels-grid'>
					{reelImages.map((src, i) => (
						<div className='reels-image-card' key={i}>
							<img src={src} alt={`Reel ${i + 1}`} />
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Menu;
