import React from "react";
import { FaChevronRight } from "react-icons/fa";

function NextProComp(props) {
	return (
		<div>
			<div className="product-comp">
				<div className="img-wrapper">
					<img src={props.image} />
				</div>
				<h3>{props.title}</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					sequi perferendis voluptatibus totam consequatur libero.
				</p>
				<a href="#">{props.link} <FaChevronRight /> </a>
			</div>
		</div>
	);
}

export default NextProComp;
