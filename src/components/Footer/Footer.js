import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<footer className='footer-bg'>
			<div className='footer-center'>
				<div className='footer-logo-row'>
					<img
						src='/icons/logo1.png'
						alt='Chutnee Logo'
						className='footer-logo'
					/>
					<span className='footer-brand'>CHUTNÉE</span>
				</div>
				<ul className='footer-links'>
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
				</ul>
				<div className='footer-contact'>
					<div>
						<img src='icons/location.png' alt='' className='footer-icon' />
						124 THE BROADWAY, SOUTHALL, LONDON, UB1 1QF
					</div>
					<div>
						<img src='icons/phone.png' alt='' className='footer-icon' />
						02085711688
					</div>
				</div>
				<div className='footer-social'>
					<img src='icons/instagram.png' alt='Instagram' />

					<img src='icons/snapchat.png' alt='snapchat' />

					<img src='icons/tiktok.png' alt='TikTok' />
				</div>
			</div>
			<div className='footer-bottom-row'>
				COPYRIGHT 2024 © ALL RIGHT RESERVED. DEVELOPED BY FO0OD.AI
			</div>
		</footer>
	);
}
