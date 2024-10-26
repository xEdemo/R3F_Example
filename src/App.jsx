import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// CSS Here
import "./index.css";
import "prismjs/themes/prism-okaidia.css";

// Pages
import "./pages/Landing/Landing.css";
import "./pages/BreachReport/AllBreachReports.css";
import "./pages/BreachReport/BreachReport.css";

// Components
import "./components/Graces/Graces.css";
import "./components/Header/Header.css";
import "./components/Cards/Landing/LandingCard.css";
import "./components/Footer/Footer.css";
import "./components/StarRating/StarRating.css";

const App = () => {
	return (
		<>
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
		</>
	);
};

export default App;
