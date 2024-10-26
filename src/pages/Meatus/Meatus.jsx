import "./Meatus.css";
import { useEffect, useState } from "react";
import { Header, Footer } from "../../components";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";

const Meatus = () => {
	const [vulnerabilities, setVulnerabilities] = useState({
		LOW: 0,
		MEDIUM: 0,
		HIGH: 0,
		CRITICAL: 0,
	});

	// Fetch vulnerability data from NVD API with date and severity parameters
	const fetchVulnerabilities = async () => {
		const lowUrl =
			"https://services.nvd.nist.gov/rest/json/cves/2.0?cvssV3Severity=LOW";
		const mediumUrl =
			"https://services.nvd.nist.gov/rest/json/cves/2.0?cvssV3Severity=MEDIUM";
		const highUrl =
			"https://services.nvd.nist.gov/rest/json/cves/2.0?cvssV3Severity=HIGH";
		const criticalUrl =
			"https://services.nvd.nist.gov/rest/json/cves/2.0?cvssV3Severity=CRITICAL";

		try {
            const [lowRes, mediumRes, highRes, criticalRes] = await Promise.all([
                fetch(lowUrl),
                fetch(mediumUrl),
                fetch(highUrl),
                fetch(criticalUrl)
            ]);

			if (!lowRes.ok) {
				throw new Error(`HTTP error! status: ${lowRes.status}`);
			} else if (!mediumRes.ok) {
				throw new Error(`HTTP error! status: ${mediumRes.status}`);
			} else if (!highRes.ok) {
				throw new Error(`HTTP error! status: ${highRes.status}`);
			} else if (!criticalRes.ok) {
				throw new Error(`HTTP error! status: ${criticalRes.status}`);
			}

			const lowData = await lowRes.json();
			const mediumData = await mediumRes.json();
			const highData = await highRes.json();
			const criticalData = await criticalRes.json();

			const filterByYear = (vulnerabilities) => {
                return vulnerabilities.filter((vulnerability) => {
                    const publishedDate = new Date(vulnerability.cve.published);
                    return publishedDate.getFullYear() === 2016;
                });
            };
    
            // Filter the vulnerabilities based on the year 2017
            const filteredLowData = filterByYear(lowData.vulnerabilities || []);
            const filteredMediumData = filterByYear(mediumData.vulnerabilities || []);
            const filteredHighData = filterByYear(highData.vulnerabilities || []);
            const filteredCriticalData = filterByYear(criticalData.vulnerabilities || []);
    
            setVulnerabilities({
                LOW: filteredLowData.length,
                MEDIUM: filteredMediumData.length,
                HIGH: filteredHighData.length,
                CRITICAL: filteredCriticalData.length,
            });
		} catch (error) {
			console.error("Error fetching vulnerability data:", error);
			setVulnerabilities({
				LOW: 0,
				MEDIUM: 0,
				HIGH: 0,
				CRITICAL: 0,
			});
		} finally {

        }
	};

	useEffect(() => {
		fetchVulnerabilities();
	}, []);

	// Prepare data based on severity for Bar, Pie, and Radar charts
	const prepareDataBySeverity = () => {
        console.log(vulnerabilities);

		return Object.entries(vulnerabilities).map(([id, value]) => ({
			id,
			value,
		}));
	};

    console.log(vulnerabilities);

	const chartData = prepareDataBySeverity();

	return (
		<>
			<Header />
			<div className="background">
				{/* Bar Chart */}
				<div style={{ height: "300px", marginBottom: "20px" }}>
					<h2>Vulnerabilities by Severity (Bar Chart)</h2>
					<ResponsiveBar
						data={chartData}
						keys={["value"]}
						indexBy="id"
						margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
						padding={0.3}
						colors={{ scheme: "nivo" }}
						axisBottom={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: "Severity",
							legendPosition: "middle",
							legendOffset: 32,
						}}
						axisLeft={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: "Count",
							legendPosition: "middle",
							legendOffset: -40,
						}}
					/>
				</div>

				{/* Pie Chart */}
				<div style={{ height: "300px", marginBottom: "20px" }}>
					<h2>Vulnerabilities by Severity (Pie Chart)</h2>
					<ResponsivePie
						data={chartData}
						margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
						innerRadius={0.5}
						padAngle={0.7}
						cornerRadius={3}
						colors={{ scheme: "nivo" }}
						borderColor={{
							from: "color",
							modifiers: [["darker", 0.2]],
						}}
						arcLabel={(d) => `${d.id}: ${d.value}`}
						enableArcLabels={true}
					/>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Meatus;
