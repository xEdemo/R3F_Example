import "./Meatus.css";
import { useEffect, useState } from "react";
import { Header, Footer } from "../../components";
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveRadar } from '@nivo/radar';

const Meatus = () => {
    const [vulnerabilities, setVulnerabilities] = useState([]);
    const [startDate, setStartDate] = useState('2021-08-04T00:00:00.000'); // Example start date
    const [endDate, setEndDate] = useState('2023-10-22T00:00:00.000'); // Example end date
    const [severity, setSeverity] = useState('HIGH'); // Example severity

    // Fetch vulnerability data from NVD API with date and severity parameters
	const fetchVulnerabilities = async () => {
		const url = 'https://services.nvd.nist.gov/rest/json/cves/2.0/?cvssV4Severity=HIGH';
		console.log('Fetching data from URL:', url);
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			console.log('Fetched data:', data);
			
			if (data && data.totalResults > 0) {
				setVulnerabilities(data.vulnerabilities || []);
			} else {
				console.warn('No vulnerabilities found:', data);
				setVulnerabilities([]);
			}
		} catch (error) {
			console.error('Error fetching vulnerability data:', error);
			setVulnerabilities([]);
		}
	};
	

    useEffect(() => {
        fetchVulnerabilities(); // Call the fetch function
    }, [startDate, endDate, severity]); // Fetch data when parameters change

    // Prepare data based on severity for Bar, Pie, and Radar charts
    const prepareDataBySeverity = () => {
        const severityCount = { LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0 };

        vulnerabilities.forEach(vulnerability => {
            const severity = vulnerability?.impact?.baseMetricV3?.severity; // Adjust according to the actual structure
            if (severityCount[severity] !== undefined) {
                severityCount[severity]++;
            }
        });

        return Object.entries(severityCount).map(([id, value]) => ({ id, value }));
    };

    const chartData = prepareDataBySeverity();

    return (
        <>
            <Header />
            <div className="background">
                {/* Bar Chart */}
                <div style={{ height: '300px', marginBottom: '20px' }}>
                    <h2>Vulnerabilities by Severity (Bar Chart)</h2>
                    <ResponsiveBar
                        data={chartData}
                        keys={['value']}
                        indexBy="id"
                        margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                        padding={0.3}
                        colors={{ scheme: 'nivo' }}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Severity',
                            legendPosition: 'middle',
                            legendOffset: 32,
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Count',
                            legendPosition: 'middle',
                            legendOffset: -40,
                        }}
                    />
                </div>

                {/* Pie Chart */}
                <div style={{ height: '300px', marginBottom: '20px' }}>
                    <h2>Vulnerabilities by Severity (Pie Chart)</h2>
                    <ResponsivePie
                        data={chartData}
                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        colors={{ scheme: 'nivo' }}
                        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                        arcLabel={(d) => `${d.id}: ${d.value}`}
                        enableArcLabels={true}
                    />
                </div>

                {/* Radar Chart */}
                <div style={{ height: '300px' }}>
                    <h2>Vulnerabilities by Severity (Radar Chart)</h2>
                    <ResponsiveRadar
                        data={[{ name: 'Vulnerabilities', ...Object.fromEntries(chartData.map(({ id, value }) => [id, value])) }]}
                        keys={['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']}
                        indexBy="name"
                        maxValue="auto"
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                        borderColor={{ from: 'color' }}
                        gridLabelOffset={36}
                        enableDots={true}
                        dotColor={{ from: 'color' }}
                        dotBorderColor={{ from: 'color', modifiers: [['darker', 0.7]] }}
                        dotSize={10}
                        animate={true}
                        motionConfig="slow"
                        legends={[
                            {
                                anchor: 'top-right',
                                direction: 'column',
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 100,
                                itemHeight: 20,
                                itemOpacity: 0.85,
                                symbolSize: 12,
                                symbolShape: 'circle',
                            },
                        ]}
                    />
                </div>

                <p>filler</p>
                <Footer />
            </div>
        </>
    );
};

export default Meatus;
