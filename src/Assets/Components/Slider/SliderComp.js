import React, {useState, useEffect} from "react";
import { FaChevronDown, FaToggleOn } from "react-icons/fa";
import DropButton from "./DropButton";

// function handleClick(e) {
// 	console.log(e.target.nextElementSibling);
// 	const sibling = e.target.nextElementSibling;
// 	// sibling.classList.toggle("toggle");
// }
function SliderComp(props) {
	const {
		first,
		second,
		third,
		fourth,
		fifth,
		sixth,
		title,
		toggleSubNav,
	} = props;

	
	return (
		<div>
			<DropButton
				
				title={title}
			/>
			{/* {isOpened ? ( */}
				<div className="dropLinks" id="dropLinks">
					<ul>
						<li>
							<a href="#">{first}</a>
						</li>
						<li>
							<a href="#">{second}</a>
						</li>
						<li>
							<a href="#">{third}</a>
						</li>
						<li>
							<a href="#">{fourth}</a>
						</li>
						<li>
							<a href="#">{fifth}</a>
						</li>
						<li>
							<a href="#">{sixth}</a>
						</li>
					</ul>
				</div>
			{/* ) : null} */}
		</div>
	);
}

export default SliderComp;
