import React from "react";
import { FaChevronRight } from "react-icons/fa";

function Banner() {
	return (
		<div>
			<div className="banner-wrapper">
				<div className="banner">
					<h1>Microsoft's response to COVID-19</h1>
					<p>
						Read how we're responding to the COVID-19 outbreak, and get
						resources to help
					</p>
					<a href="#">Learn More <FaChevronRight /> </a>
				</div>
			</div>
		</div>
	);
}

export default Banner;
