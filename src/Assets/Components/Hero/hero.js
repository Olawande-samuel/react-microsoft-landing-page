import React from "react";
import "./hero.css";
import logo from "../MS-Images/MS-landing-lg.png";
import Button from "../../../Button/Button";


function hero(props) {
	return (
		<div>
			<div className={props.class}>
				<div className="para-wrap">
                    <h2>{props.title}</h2>
					<p>
						{props.subtitle}
					</p>
					<Button value={props.value} />
				</div>
			</div>
		</div>
	);
}

export default hero;
