import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				{/* Hamburger Menu for Mobile */}
				<button
					className='navbar-hamburger'
					aria-label='Menu'
					onClick={() => setIsOpen((prev) => !prev)}>
					<span className='bar'></span>
					<span className='bar'></span>
					<span className='bar'></span>
				</button>

				{/* Logo */}
				<div className='navbar-logo'>
					<img src='/icons/logo1.png' alt='Logo C' className='logo-c' />
					<img src='/icons/logo.png' alt='Chutnee Text' className='logo-text' />
				</div>

				{/* Desktop Nav Links */}
				<div className='navbar-links'>
					<a href='#ourstory'>OUR STORY</a>
					<a href='#menu'>MENU</a>
					<a href='#afternoontea'>AFTERNOON TEA</a>
					<a href='#events'>EVENTS</a>
					<a href='#family'>CHUTNÉE FAMILY</a>
					<a href='#contact'>CONTACT</a>
				</div>

				{/* Desktop Reservation Button */}
				<a href='#reservation' className='navbar-reservation desktop-only'>
					RESERVATION <span className='arrow'>{">"}</span>
				</a>
			</div>

			{/* Mobile Drawer Links + Reservation Button */}
			<div className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}>
				<a onClick={() => setIsOpen(false)} href='#ourstory'>
					OUR STORY
				</a>
				<a onClick={() => setIsOpen(false)} href='#menu'>
					MENU
				</a>
				<a onClick={() => setIsOpen(false)} href='#afternoontea'>
					AFTERNOON TEA
				</a>
				<a onClick={() => setIsOpen(false)} href='#events'>
					EVENTS
				</a>
				<a onClick={() => setIsOpen(false)} href='#family'>
					CHUTNÉE FAMILY
				</a>
				<a onClick={() => setIsOpen(false)} href='#contact'>
					CONTACT
				</a>
				<a
					onClick={() => setIsOpen(false)}
					href='#reservation'
					className='navbar-reservation mobile-only'>
					RESERVATION <span className='arrow'>{">"}</span>
				</a>
			</div>
		</nav>
	);
}
