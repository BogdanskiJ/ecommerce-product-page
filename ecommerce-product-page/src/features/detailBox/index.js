import {
	Counter,
	StyledButtonBox,
	StyledCounterBox,
	StyledDetailBox,
	StyledOldPrice,
	StyledPricesBox,
	StyledTitle,
} from "./styled";

import iconCart from "../../images/icon-cart.svg";

export const DetailBox = () => {
	let counter = 0;
	return (
		<StyledDetailBox>
			<StyledTitle>Sneaker Company</StyledTitle>
			<h1>Fall Limited Edition Sneakers</h1>
			<p>
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they’ll withstand everything the
				weather can offer.
			</p>
			<StyledPricesBox>
				<span>$125.00</span>
				<div>50%</div>
			</StyledPricesBox>
			<StyledOldPrice>$250.00</StyledOldPrice>
			<StyledButtonBox>
				<StyledCounterBox>
					<span>-</span>
					<Counter>{counter}</Counter>
					<span>+</span>
				</StyledCounterBox>
				<button>
					<img src={iconCart} />
					Add to cart
				</button>
			</StyledButtonBox>
		</StyledDetailBox>
	);
};
