import imgCart from "../../images/icon-cart.svg";
import { StyledCart } from "./styled";

export const Cart = () => {
	return (
		<StyledCart>
			<img src={imgCart} />
		</StyledCart>
	);
};
