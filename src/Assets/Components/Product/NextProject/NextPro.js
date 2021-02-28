import React from "react";
import NextProComp from "./NextProComp";
import FifthImage from "../Product-Page/section/img-5.webp";
import SixthImage from "../Product-Page/section/img-6.webp";
import SeventhImage from "../Product-Page/section/img-7.webp";
import EighthImage from "../Product-Page/section/img-8.webp";
import "../Product.css";

function NextPro() {
	return (
		<div className="productFlex">
			<NextProComp
				image={FifthImage}
				title="Microsoft 365 for beginners"
				link="Shop now"
			/>
			<NextProComp
				image={SixthImage}
				title="Windows 10 Enterprise"
				link="Download now"
			/>
			<NextProComp
				image={SeventhImage}
				title="Microsoft Edge"
				link="Download now"
				Download
				now
			/>
			<NextProComp
				image={EighthImage}
				title="Get Visual Studio 2019"
				link="Download now"
			/>
		</div>
	);
}

export default NextPro;
