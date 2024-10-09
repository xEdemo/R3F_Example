import { Graces, Header } from "./../../components";

const Landing = () => {
	return (
		<>
			<Header />
			{/* Content */}
			<div style={{ width: "100%", height: "calc(100% - 50px)", position: "absolute", backgroundColor: "rgba(50, 50, 50, 0.8)", top: "50px" }}>
				<p>Hey my name is roonie</p>
			</div>
			<Graces />
		</>
	);
};

export default Landing;
