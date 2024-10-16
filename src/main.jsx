import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

// Pages:
import { Landing, AllThreatReports } from "./pages";
import Meatus from "./pages/Meatus/Meatus.jsx";

// Components:

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" index={true} element={<Landing />} />
            <Route path="/threat-reports" element={<AllThreatReports />} />
            <Route path="/meatus" element={<Meatus />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
