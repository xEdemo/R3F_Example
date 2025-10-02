import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
	return (
        <div className="header-container">
            <nav className="web-header">
                <ul>
                    <li>
                        <Link to="/">
                        <img src="/src/assets/hook.png" alt="" /></Link>
                    </li>
                </ul>
                <ul>
                    <li className="dropdown">
                        <button onClick={toggleDropdown} className="dropdown-button">
                            More
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-content">
                                <Link to="/breach-reports">Breach Reports</Link>
                                <Link to="/tool-reviews">Tool Reviews</Link>
                                <Link to="/case-studies">Case Studies</Link>
                                <Link to="/threat-profiles">Threat Profiles</Link>
                                <Link to="/malware-analyses">Malware Analyses</Link>
                                <Link to="/weekly-blogs">Weekly Blogs</Link>
                                <Link>CrackMe</Link>
                                <Link to="/meatus">Meatus</Link>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
