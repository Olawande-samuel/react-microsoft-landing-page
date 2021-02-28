import React from "react";
import Footer from "../Footer/Footer";
import "./Navbar.css";
import FirstImage from "../Product/Product-Page/section/img-2.webp";
import {
	FaWindowClose,
	FaBars,
	FaMicrosoft,
	FaShoppingCart,
	FaChevronDown,
	FaSearch,
} from "react-icons/fa";
const openSlide = () =>{
	console.log("clicked")
}
function Navbar() {
	const toggleNav = () => {
		let drop = document.getElementById("drop");
		console.log("clicked", drop);

		drop.classList.toggle("openClose");
	};
	return (
		<div>
			<div className="navbar">
				<div className="left">
					{/* <div onClick={()=>openSlide()}><i><FaBars /></i></div> */}
					<div className="navbar-logo container">
						<a href="index.html">
							{" "}
							<FaMicrosoft /> Microsoft
						</a>
					</div>
				</div>
				<div className="mid">
					<div className="links">
						<ul>
							<li>
								<a href="#">Microsoft 365</a>
							</li>
							<li>
								<a href="#">Office</a>
							</li>
							<li>
								<a href="#">Windows</a>
							</li>
							<li>
								<a href="#">Xbox</a>
							</li>
							<li>
								<a href="#">Support</a>
							</li>
						</ul>

						<div className="dropdown-wrapper">
							<p
								onClick={() => {
									toggleNav();
								}}
							>
								All Microsoft <FaChevronDown />
							</p>
							<div className="dropdown" id="drop">
								<Footer
									header="Software"
									first="Windows Apps"
									second="One Drive"
									third="Outlook"
									fourth="Skype"
									fifth="OneNote"
									sixth="Microsoft Teams"
								/>
								<Footer
									header="PC &amp; Devices"
									first="Shop Xbox"
									second="Accessories"
								/>
								<Footer
									header="Entertainment"
									first="PC Games"
									second="Windows digital games"
								/>
								<Footer
									header="Business"
									first="Microsoft Azure"
									second="Microsoft Dynamics 365"
									third="Microsoft 365"
									fourth="Microsoft Industry"
									fifth="Data platform"
								/>
								<Footer
									header="Developer &amp; IT"
									first=".NET"
									second="Visual Studio"
									third="Windows Server"
									fourth="Windows Dev Center"
									fifth="Docs"
									fourth="Power Apps"
								/>
								<Footer
									header="Other"
									first="Free downloads &amp; security"
									second="Education"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="right">
					<div className="profile-wrapper">
						<a href="#">
							<i>
								<FaSearch />
							</i>
						</a>
						<a href="#">
							<i>
								<FaShoppingCart />
							</i>
						</a>
						<div className="profile-img">
							<img src={FirstImage} alt="profile" className="profile" />
						</div>
					</div>
				</div>
				{/* <div className="close">&times;</div> */}
			</div>
		</div>
	);
}

export default Navbar;
