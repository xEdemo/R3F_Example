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
import { Landing } from "./pages";

// Components:

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" index={true} element={<Landing />} />
            {/* Private Routes */}
            {/* <Route path="" element={<PrivateRoute />}>
                <Route element={<Layout />}>
                    ...
                </Route>
            </Route> */}
            {/* Not Found (404) */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
