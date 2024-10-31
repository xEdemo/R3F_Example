import { Header, Footer, ViewAll } from "./../../components";

const ReportList = ({ reports, title, basePath }) => {
    return (
        <>
            <Header />
            <div className="background">
                <ViewAll reports={reports} title={title} basePath={basePath} />
				<Footer />
            </div>
        </>
    );
};

export default ReportList;
