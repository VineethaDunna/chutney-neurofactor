import React from "react";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import AboutSection from "./components/AboutSection/AboutSection";
import Offer from "./components/Offer/Offer";
import BestSellers from "./components/BestSellers/BestSellers";
import Menu from "./components/Menu/Menu";
import SocialSection from "./components/SocialSection/SocialSection";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<TopNavbar />
			<Hero />
			<Navbar />
			<AboutSection />
			<Offer />
			<BestSellers />
			<Menu />
			<SocialSection />
			<Gallery />
			<Footer />
		</>
	);
}

export default App;
