import React from "react";

function Footer(props) {
	return (
		<div>
			<footer className="footer {props.footer}">
				<h3>{props.header}</h3>
				<div className="footer-links {props.links-wrapper}">
					<ul>
						<li>
							<a href="{props.first}">{props.first}</a>
						</li>
						<li>
							<a href="{props.second}">{props.second}</a>
						</li>
						<li>
							<a href="{props.third}">{props.third}</a>
						</li>
						<li>
							<a href="{props.fourth}">{props.fourth}</a>
						</li>
						<li>
							<a href="{props.fifth}">{props.fifth}</a>
						</li>
						<li>
							<a href="{props.sixth}">{props.sixth}</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
