import React from "react";
import "./SocialSection.css";

const socials = [
	{
		label: "TIKTOK",
		img: require("../../assets/img1.png"),
	},
	{
		label: "IG",
		img: require("../../assets/img2.png"),
	},
	{
		label: "SNAP",
		img: require("../../assets/img3.png"),
	},
];

export default function SocialSection() {
	return (
		<section className='social-bg'>
			<div className='social-title'>
				STAY CONNECTED & SHARE
				<br />
				YOUR EXPERIENCE WITH US!
			</div>
			<div className='social-row'>
				{socials.map((item, idx) => (
					<div className='social-circle' key={item.label}>
						<img src={item.img} alt={item.label} />
						<span className='social-label'>{item.label}</span>
					</div>
				))}
			</div>
		</section>
	);
}
