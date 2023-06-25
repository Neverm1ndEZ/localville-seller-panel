import "./TopSellingProduct.css";
import Shoes from "../assets/Shoes.png";
import ReactStars from "react-rating-stars-component";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const secondExample = {
	size: 20,
	count: 5,
	value: 4,
	a11y: true,
	isHalf: true,
	emptyIcon: <AiOutlineStar />,
	halfIcon: <BsStarHalf />,
	filledIcon: <AiTwotoneStar />,
	onChange: (newValue) => {
		console.log(`Example 2: new value is ${newValue}`);
	},
};

const Data = [
	{
		id: 0,
		image: Shoes,
		name: "NIKE Shoes Black Pattern",
		price: "Rs 5000",
	},
	{
		id: 1,
		image: Shoes,
		name: "NIKE Shoes Black Pattern",
		price: "Rs 5000",
	},
	{
		id: 2,
		image: Shoes,
		name: "NIKE Shoes Black Pattern",
		price: "Rs 5000",
	},
	{
		id: 3,
		image: Shoes,
		name: "NIKE Shoes Black Pattern",
		price: "Rs 5000",
	},
	{
		id: 4,
		image: Shoes,
		name: "NIKE Shoes Black Pattern",
		price: "Rs 5000",
	},
	{
		id: 5,
		image: Shoes,
		name: "NIKE Shoes Black Pattern",
		price: "Rs 5000",
	},
];

const TopSellingProduct = () => {
	return (
		<div className="top-product">
			<div className="tsp-heading">
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
						margin: "0 0 5px 10px",
					}}
				>
					TOP SELLING PRODUCT
				</h3>
			</div>
			<div className="card-container">
				{Data.map(({ id, name, price, image }) => {
					return (
						<div key={id} className="item">
							<div className="card-item-image">
								<img
									src={image}
									alt="File Image"
									style={{ width: "100%", borderRadius: "17.631px" }}
								/>
							</div>
							<div className="image-props">
								<h3>{name}</h3>
								<ReactStars {...secondExample} />
								<p>{price}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TopSellingProduct;
