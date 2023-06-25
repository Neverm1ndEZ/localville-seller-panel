import "./FeaturedCards.css";
import { AiFillHeart } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";

const FeaturedCards = () => {
	return (
		<div className="featured-card-container">
			<div className="profit">
				<h4>PROFIT</h4>
				<h5>THIS MONTH</h5>
				<AiFillHeart size={18} color="#6254FF" />
				<p>1000</p>
			</div>
			<div className="store-visit">
				<h4>STORE VISIT</h4>
				<h5>THIS MONTH</h5>
				<IoGameControllerOutline size={18} color="#2FE5A7" />
				<p>1000</p>
			</div>
			<div className="orders-delivered">
				<h4>ORDERS</h4>
				<h5>DELIVERED</h5>
				<FaBagShopping size={18} color="#FF69B4" />
				<p>1000</p>
			</div>
			<div className="orders-return">
				<h4>PROFIT</h4>
				<h5>THIS MONTH</h5>
				<BsFillBriefcaseFill size={18} color="#FF8F6B" />
				<p>1000</p>
			</div>
		</div>
	);
};

export default FeaturedCards;
