import "./Topbar.css";
import Logo from "../assets/logo.png";
import Profile from "../assets/Profile Image.png";
import { IoIosNotificationsOutline } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";

const Topbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={Logo} alt="Localville Logo" className="navbar_img" />
			</div>
			<div className="nav-content">
				<div className="notify-text">
					<IoIosNotificationsOutline size="2em" />
					Notification
				</div>
				<div className="notify-profile">
					<img src={Profile} alt="Localville Logo" className="profile-logo" />
					<div className="notify-profile-contents">
						<h4>Name</h4>
						<p>Email</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
