// import { Chart } from "react-google-charts";

// const PieChart = () => {
// 	const data = [
// 		["Task", "Hours per Day"],
// 		["Work", 11],
// 		["Eat", 2],
// 		["Commute", 2],
// 		["Watch TV", 2],
// 		["Sleep", 7], // CSS-style declaration
// 	];

// 	const options = {
// 		pieHole: 0.55,
// 		is3D: false,
// 	};

// 	return (
// 		<div>
// 			<Chart
// 				chartType="PieChart"
// 				width="100%"
// 				height="400px"
// 				data={data}
// 				options={options}
// 			/>
// 		</div>
// 	);
// };

// export default PieChart;

import "./PieChart.css";
import DonutChart from "react-donut-chart";

const PieChart = () => {
	const reactDonutChartdata = [
		{
			label: "Total Order Placed",
			value: 60,
			color: "#00E396",
		},
		{
			label: "Total Order Delivered",
			value: 30,
			color: "#FEB019",
		},
		{
			label: "Total Order Returned",
			value: 20,
			color: "#FF4560",
		},
	];
	const reactDonutChartBackgroundColor = ["#3A36DB", "#FF69B4", "#03A89E"];

	return (
		<div className="chart-card-container">
			<div
				className="donut-chart"
				style={{ margin: "4rem 0 0 0", padding: "0rem", borderRadius: "13px" }}
			>
				<DonutChart
					strokeWidth={20} // Adjust the strokeWidth as needed
					strokeLinecap="round"
					width={416}
					height={320}
					strokeColor={reactDonutChartBackgroundColor}
					data={reactDonutChartdata}
					colors={reactDonutChartBackgroundColor}
					innerRadius={0.5}
					selectedOffset={0.04}
					className="donutchart"
				/>
			</div>
			<p
				style={{
					color: "rgba(0, 0, 0, 0.50)",
					fontSize: "0.75rem",
					fontFamily: "Poppins",
					fontWeight: 600,
					lineHeight: "140%",
					margin: "2rem 0 2rem 18rem",
				}}
			>
				View full Statistics
			</p>
		</div>
	);
};

export default PieChart;
