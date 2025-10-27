import React from "react";
import "./Offer.css";

import star3 from "../../assets/star3.png";
import star4 from "../../assets/star4.png";
import chutneeImg from "../../assets/whychoose.png"; // Use actual asset name here
import starTopLeft from "../../assets/star5.png"; // Top left star image
import starBottomRight from "../../assets/star8.png";
import starTopLeft1 from "../../assets/star6.png"; // Top left star image
import starBottomRight1 from "../../assets/star7.png";

const offers = [
	{ label: "BREAKFAST", img: "breakfast.png", bg: "backbreak.png" },
	{ label: "STREET FOOD", img: "streetfood.png", bg: "backstreet.png" },
	{ label: "DESSERTS", img: "desserts.png", bg: "backdesserts.png" },
	{ label: "CHAI", img: "chaii.png", bg: "backchai.png" },
	{ label: "HOT DRINKS", img: "hotdrinks.png", bg: "backhot.png" },
	{ label: "COLD DRINKS", img: "colddrinks.png", bg: "backcold.png" },
];

export default function Offer() {
	return (
		<>
			<div className='offer-section'>
				<div className='offer-header'>
					<h2 className='offer-title'>WHAT WE OFFER</h2>
				</div>
				<div className='offer'>
					<img src={star3} alt='decoration' className='star-img1 left' />

					<div className='offer-grid'>
						{offers.map((item, i) => (
							<div
								key={item.label}
								className='offer-item'
								style={{
									backgroundImage: `url(${require(`../../assets/${item.bg}`)})`,
								}}>
								<img
									src={require(`../../assets/${item.img}`)}
									alt={item.label}
									className='offer-img'
								/>
								<span className='offer-label'>{item.label}</span>
							</div>
						))}
					</div>
					<img src={star4} alt='decoration' className='star-img2 right' />
				</div>
			</div>

			<section className='why-choose-section'>
				{/* Decorative stars - absolute in container */}
				<img
					src={starTopLeft}
					alt=''
					className='why-star why-star-img why-star-top-left'
				/>

				<div className='why-choose-content'>
					<div className='why-img-wrapper'>
						<img
							src={starTopLeft1}
							alt=''
							className='why-star1 why-star-img1 why-star-top-left1'
						/>
						<img src={chutneeImg} alt='Street Food' className='why-img' />
						<img
							src={starBottomRight1}
							alt=''
							className='why-star1 why-star-img1 why-star-bottom-right1'
						/>
					</div>
					<div className='why-txt-block'>
						<h2 className='why-title'>WHY CHOOSE CHUTNÉE</h2>
						<div className='why-subtitle'>Fresh Flavours. Authentic Vibes.</div>
						<p className='why-desc'>
							Discover bold, South Asian-inspired cuisine in the heart of
							Southall. From indulgent halal breakfasts to refined fusion
							plates, Chutnée blends tradition with modern flair — all served in
							a vibrant, welcoming space.
						</p>
						<div className='why-stats'>
							<div className='why-stat'>
								<div className='why-stat-value' style={{ color: "#16b34a" }}>
									100%
								</div>
								<div className='why-stat-label'>
									Locally Sourced
									<br />
									Ingredients
								</div>
							</div>
							<div className='why-stat'>
								<div className='why-stat-value' style={{ color: "#11b3b5" }}>
									98%
								</div>
								<div className='why-stat-label'>
									Friendly, Attentive
									<br />
									Service
								</div>
							</div>
							<div className='why-stat'>
								<div className='why-stat-value' style={{ color: "#a728a9" }}>
									99%
								</div>
								<div className='why-stat-label'>
									Perfect for Social
									<br />
									Gatherings
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Decorative stars - absolute in container */}
				<img
					src={starBottomRight}
					alt=''
					className='why-star why-star-img why-star-bottom-right'
				/>
			</section>
		</>
	);
}
