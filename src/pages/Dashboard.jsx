import "../styles/Dashboard.css";
import Topbar from "../components/Topbar";
import Drawer from "../components/Drawer";
import Banner from "../components/Banner";
import TopSellingProduct from "../components/TopSellingProduct";
import PieChart from "../components/PieChart";
import FeaturedCards from "../components/FeaturedCards";
import Invoice from "../components/Invoice";

const Dashboard = () => {
	return (
		<>
			<Topbar />
			<Drawer />
			<Banner />
			<div className="dashboard-card">
				<div className="dashboard-featured-card">
					<FeaturedCards />
					<h3
						style={{
							color: "#2F3367",
							leadingTrim: "both",
							textEdge: "cap",
							fontSize: "0.9375rem",
							fontFamily: "Poppins",
							fontWeight: 600,
							lineHeight: "27.5%",
							textTransform: "uppercase",
							margin: "1rem 0",
						}}
					>
						PIE CHART
					</h3>
					<PieChart />
				</div>
				<TopSellingProduct />
			</div>
			<Invoice />
		</>
	);
};

export default Dashboard;
