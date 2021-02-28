import React from "react";
import Footer from "./Footer";
import {BiWorld} from 'react-icons/bi'
import "./Footer.css";

function FooterModule() {
	return (
		<div className="footer-wrapper">
			<div className="topPart footerFlex">
				<Footer
					header="Microsoft Store"
					first="Account profile"
					second="Returns"
					third="Order tracking"
				/>
				<Footer header="Education" first="Office 365 for schools" />
				<Footer header="Enterprise" first="Microsoft Azure" />
				<Footer
					header="Developer"
					first="Microsoft Visual Studio"
					second="Developer Center"
					third="Channel 9"
					fourth="Office Dev Center"
				/>
				<Footer
					header="Company"
					first="Careers"
					second="About Microsoft"
					third="Company news"
					fourth="Investors"
				/>
			</div>
			<div className="bottomPart">
				<p>
					<span> <BiWorld /> English (Nigeria)</span>
				</p>
				<ul>
					<li>
						<a href="#">Contact Microsoft</a>
					</li>
					<li>
						<a href="#">Privacy</a>
					</li>
					<li>
						<a href="#">Terms of use</a>
					</li>
					<li>
						<a href="#">Trademarks</a>
					</li>
					<li>
						<a href="#">About our ads</a>
					</li>
					<p>&copy; Microsoft 2021</p>
				</ul>
			</div>
		</div>
	);
}

export default FooterModule;
