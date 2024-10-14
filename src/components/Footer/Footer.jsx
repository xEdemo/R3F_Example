import { BsGithub, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<Link
				to="https://github.com/Xnrrrrrr"
				target="_blank"
				rel="noopener noreferrer"
			>
				<BsGithub size={24} className="footer-icon" />
			</Link>
			<Link
				to="https://x.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<BsTwitterX size={24} className="footer-icon" />
			</Link>
		</footer>
	);
};

export default Footer;
