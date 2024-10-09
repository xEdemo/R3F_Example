import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// CSS Here
import "./index.css";

// Components
import "./components/Graces/Graces.css";
import "./components/Header/Header.css";

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
