import React from "react";
import "./TopNavbar.css";

const TopNavbar = () => {
	return (
		<div className='top-navbar'>
			<div className='contact-info'>
				<span>
					<img src='/icons/location.png ' alt='location' /> 124 THE BROADWAY,
					SOUTHALL, LONDON, UB1 1QF
				</span>
				<span>
					<img src='/icons/phone.png ' alt='phone' /> 02085711688
				</span>
			</div>
			<div className='social-icons'>
				<img src='/icons/snapchat.png ' alt='Snapchat' />

				<img src='/icons/instagram.png' alt='Instagram' />

				<img src='/icons/tiktok.png' alt='TikTok' />
			</div>
		</div>
	);
};

export default TopNavbar;
