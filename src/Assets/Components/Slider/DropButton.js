import React from "react";
import {FaChevronDown} from 'react-icons/fa'
// function handleClick({handleClick}) {
//     console.log(handleClick.target.value)
// }
function DropButton(props) {
    
	return (
		<p onClick={props.toggleDropdown}>
			{props.title}{" "}
			<span>
				<FaChevronDown />
			</span>
		</p>
	);
}

export default DropButton;
