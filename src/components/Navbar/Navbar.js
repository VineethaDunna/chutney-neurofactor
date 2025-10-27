import React from "react";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className='navbar'>
			<div className='navbar-logo'>
				<img src='/icons/logo1.png' alt='Logo C' className='logo-c' />
				<img src='/icons/logo.png' alt='Chutnee Text' className='logo-text' />
			</div>
			<div className='navbar-links'>
				<a href='#ourstory'>OUR STORY</a>
				<a href='#menu'>MENU</a>
				<a href='#afternoontea'>AFTERNOON TEA</a>
				<a href='#events'>EVENTS</a>
				<a href='#family'>CHUTNÉE FAMILY</a>
				<a href='#contact'>CONTACT</a>
			</div>
			<a href='#reservation' className='navbar-reservation'>
				RESERVATION <span className='arrow'>{">"}</span>
			</a>
		</nav>
	);
}
