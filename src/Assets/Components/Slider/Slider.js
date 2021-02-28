import React, { useState, useEffect } from "react";
import "./Slider.css";
import SliderComp from "./SliderComp";

function Slider(props) {
	const [openNav, setOpenNav] = useState();
	// const [anonNav, setAnonNav] = useState(false);
	
	useEffect(()=> {
		// console.log( openNav)
	}, [openNav])

	
	
	const close = (e) => {
		console.log(e)
		// return setOpenNav(e.target.innerText)
	}
	return (
		<div>
			<div className="sliderLinks">
				<ul>
					<li>
						<a href="#" onClick={() => close()}>
							Microsoft 365
						</a>
					</li>
					<li>
						<a href="#" >
							Office
						</a>
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
					<div className="sliderDropdown">
						<SliderComp
							title="Software"
							first="Windows Apps"
							second="One Drive"
							third="Outlook"
							fourth="Skype"
							third="OneNotek"
							third="Microsoft Teams"
						/>
						<SliderComp
							title="PCs &amp; Devices"
							first="Shop Xbox"
							second="Accessories"
						/>
						<SliderComp
							title="Entertainment"
							first="PC Games"
							second="Windows digital games"
						/>
						<SliderComp
							title="Business"
							first="Microsoft Azure"
							second="Microsoft Dynamics 365"
							third="Microsoft 365"
							fourth="Microsoft Industry"
							fifth="Data platform"
						/>
						<SliderComp
							title="Developer &amp; IT"
							first=".NET"
							second="Visual Studio"
							third="Windows Server"
							fourth="Windows Dev Center"
							fifth="Docs"
							fourth="Power Apps"
						/>
						<SliderComp
							title="Other"
							first="Free downloads &amp; security"
							second="Education"
						/>
					</div>
				</ul>
			</div>
		</div>
	);
}

export default Slider;
