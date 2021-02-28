import React from "react";
import "./App.css";
import Navbar from "./Assets/Components/Header/Navbar";
import Hero from "./Assets/Components/Hero/hero";
import Product from "./Assets/Components/Product/Product";
import Banner from "./Assets/Components/Banner/Banner";
import NextPro from "./Assets/Components/Product/NextProject/NextPro";
import SecondBanner from "./Assets/Components/SecondBanner/SecondBanner";
import FooterModule from "./Assets/Components/Footer/FooterModule";
import Slider from "./Assets/Components/Slider/Slider";


function App() {
	return (
		<div className="container">
			<div className="mother">
				<Navbar />
				<Hero
					class="hero-wrapper"
					value="For up to 6 people"
					title="Microsoft 365"
					subtitle="Premium Office apps, extra cloud storage, advanced security, and more — all in one convenient subscription"
				/>
				<Product />
				<Hero
					class="lower-hero-wrapper"
					value="Download now"
					title="Outlook for iOS and Android"
					subtitle="Connect. Organize. Get things done"
				/>
				<NextPro />
				<Banner />
				<SecondBanner />
			</div>
				<FooterModule />
		</div>
	);
}

export default App;
