import { BsGithub, BsTwitterX } from "react-icons/bs";
import { SiJabber, SiProton } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<p>&copy; 2024 My Website. All rights reserved.</p>
			<p>Contact: gaylord@hotmail.com</p>
			<p>Socials:</p>
			<div>
				<Link
					to="https://github.com/Xnrrrrrr"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsGithub size={36} className="footer-icon" />
				</Link>
				<Link
					to="https://x.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsTwitterX size={36} className="footer-icon" />
				</Link>
				<Link
					to="https://www.jabber.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiJabber size={36} className="footer-icon" />
				</Link>
				<Link
					to="https://www.proton.me"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiProton size={36} className="footer-icon" />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
