import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

// JS
import { aboutMe, HTBWriteups, crackMeWriteups, threatProfiles, malwareAnalyses, weeklyBlog,  } from "./content.js" 

// Pages:
import { Landing, ReportList, ReportDetail } from "./pages";

// Components:

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" index={true} element={<Landing />} />
            {/* <Route path="/breach-reports" element={<ReportList reports={breachReports} title="Breach Reports" basePath="/breach-reports" />} />
			<Route path="/breach-reports/:index" element={<ReportDetail reports={breachReports} basePath="/breach-reports" reportType="breach" />} />
			<Route path="/tool-reviews" element={<ReportList reports={toolReviews} title="Tool Reviews" basePath="/tool-reviews" />} />
			<Route path="/tool-reviews/:index" element={<ReportDetail reports={toolReviews} basePath="/tool-reviews" reportType="tool" />} /> */}
			<Route path="/about-me" element={<ReportDetail reports={aboutMe} reportType={"about me"} />} />
			<Route path="/htb-writeups" element={<ReportList reports={HTBWriteups} title="HTB Writeups" basePath="/htb-writeups" />} />
			<Route path="/htb-writeups/:index" element={<ReportDetail reports={HTBWriteups} basePath="/htb-writeups" reportType="HTB writeups" />} />
			<Route path="/weekly-blogs" element={<ReportList reports={weeklyBlog} title="Maleware Analyses" basePath="/weekly-blogs" />} />
			<Route path="/weekly-blogs/:index" element={<ReportDetail reports={weeklyBlog} basePath="/weekly-blogs" reportType="weekly" />} />
			<Route path="/crack-me-writeups" element={<ReportList reports={crackMeWriteups} title="Crack Me Writeups" basePath="/crack-me-writeups" />} />
			<Route path="/crack-me-writeups/:index" element={<ReportDetail reports={crackMeWriteups} basePath="/crack-me-writeups" reportType="crack me" />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
