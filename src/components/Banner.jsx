import "./Banner.css";
import BannerImage from "../assets/Banner.png";

const Banner = () => {
	return (
		<div className="hero" style={{ padding: "5rem 3rem 1.5rem 17rem" }}>
			<div className="dash-text">DASHBOARD</div>
			<div className="banner">
				<img src={BannerImage} alt="Banner Image" style={{ width: "100%" }} />
				<h1 className="banner-text">Banner</h1>
			</div>
		</div>
	);
};

export default Banner;
