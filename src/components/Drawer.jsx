import "./Drawer.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FiHome } from "react-icons/fi";
import { BsGift } from "react-icons/bs";
import { PiCellSignalHighBold, PiStorefrontLight } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";

const Drawer = () => {
	return (
		<Sidebar
			className="sidebar"
			style={{
				backgroundColor: "#fff",
				height: "100vh",
				width: "auto",
				position: "fixed",
				display: "inline-flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Menu
				style={{
					backgroundColor: "#fff",
				}}
			>
				<MenuItem>
					<FiHome /> Dashboard
				</MenuItem>
				<MenuItem>
					<BsGift /> Product
				</MenuItem>
				<MenuItem>
					<PiCellSignalHighBold /> Invoice{" "}
				</MenuItem>
				<MenuItem>
					<PiStorefrontLight /> My Store{" "}
				</MenuItem>{" "}
				<MenuItem>
					<LuLogOut /> Logout{" "}
				</MenuItem>
			</Menu>
		</Sidebar>
	);
};

export default Drawer;
