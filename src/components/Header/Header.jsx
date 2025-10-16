import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
	return (
		<div className="header-container">
			<nav className="web-header">
				<ul>
					<li>
						<Link to="/">
							<img
								src="/src/assets/hook.png"
								alt=""
								className="header-icon"
							/>
						</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link to="/about-me">Breach Reports</Link>
						<Link to="/HTB-writeups">HTB</Link>
						<Link to="/weekly-blogs">Weekly Blogs</Link>
						<Link to="/crack-me-writeups">CrackMe</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
