import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// CSS Here
import "./index.css";
import "./components/Graces/Graces.css"

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
