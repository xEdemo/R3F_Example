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
import { breachReports, toolReviews, caseStudies, threatProfiles, malwareAnalyses, weeklyBlog,  } from "./content.js" 

// Pages:
import { Landing, ReportList, ReportDetail } from "./pages";
import Meatus from "./pages/Meatus/Meatus.jsx";

// Components:

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" index={true} element={<Landing />} />
            <Route path="/breach-reports" element={<ReportList reports={breachReports} title="Breach Reports" basePath="/breach-reports" />} />
			<Route path="/breach-reports/:index" element={<ReportDetail reports={breachReports} basePath="/breach-reports" reportType="breach" />} />
			<Route path="/tool-reviews" element={<ReportList reports={toolReviews} title="Tool Reviews" basePath="/tool-reviews" />} />
			<Route path="/tool-reviews/:index" element={<ReportDetail reports={toolReviews} basePath="/tool-reviews" reportType="tool" />} />
			<Route path="/case-studies" element={<ReportList reports={caseStudies} title="Case Studies" basePath="/case-studies" />} />
			<Route path="/case-studies/:index" element={<ReportDetail reports={caseStudies} basePath="/case-studies" reportType="case" />} />
			<Route path="/threat-profiles" element={<ReportList reports={threatProfiles} title="Threat Profiles" basePath="/threat-profiles" />} />
			<Route path="/threat-profiles/:index" element={<ReportDetail reports={threatProfiles} basePath="/threat-profiles" reportType="threat" />} />
			<Route path="/malware-analyses" element={<ReportList reports={malwareAnalyses} title="Maleware Analyses" basePath="/malware-analyses" />} />
			<Route path="/malware-analyses/:index" element={<ReportDetail reports={malwareAnalyses} basePath="/malware-analyses" reportType="malware" />} />
			<Route path="/weekly-blogs" element={<ReportList reports={weeklyBlog} title="Maleware Analyses" basePath="/weekly-blogs" />} />
			<Route path="/weekly-blogs/:index" element={<ReportDetail reports={weeklyBlog} basePath="/weekly-blogs" reportType="weekly" />} />
            <Route path="/meatus" element={<Meatus />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
