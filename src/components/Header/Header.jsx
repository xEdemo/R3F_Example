import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div
			style={{
				backgroundColor: "rgba(50, 50, 50, 0.8)",
				width: "100%",
				height: "50px",
				position: "absolute",
				boxShadow: "0px 0px 5px black",
				zIndex: 100,
			}}
		>
			<nav className="web-header">
				<ul
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						textAlign: "center",
						alignItems: "center",
						height: "50px",
					}}
				>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link>Roonie</Link>
					</li>
					<li>
						<Link>Big</Link>
					</li>
					<li>
						<Link>Dog</Link>
					</li>
					<li>
						<Link>Crackmes</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
