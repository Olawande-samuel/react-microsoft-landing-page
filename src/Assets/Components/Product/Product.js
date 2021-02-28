import React from "react";
import ProductComp from "./Product-Page/ProductComp";
import "./Product.css";
import FirstImage from "./Product-Page/section/img-1.webp";
import SecondImage from "./Product-Page/section/img-2.webp";
import ThirdImage from "./Product-Page/section/img-3.webp";
import FourthImage from "./Product-Page/section/img-4.webp";

function Product() {
	return (
		<div className="productFlex">
			<ProductComp
				image={FirstImage}
				title="Microsoft Teams"
				link="Learn More"
			/>
			<ProductComp
				image={SecondImage}
				title="Microsoft Edge"
				link="Download now"
			/>
			<ProductComp
				image={ThirdImage}
				title="Microsoft OneDrive"
				link="Learn more"
			/>
			<ProductComp
				image={FourthImage}
				title="Windows 10 Update"
				link="Learn more"
			/>
		</div>
	);
}

export default Product;
