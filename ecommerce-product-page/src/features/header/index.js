import { StyledAvatar, StyledBox, StyledLogo } from "./styled";

import logo from "../../images/logo.svg";
import avatar from "../../images/image-avatar.png";
import { Cart } from "../cart";

export const Header = () => {
	return (
		<StyledBox>
			<StyledLogo>
				<img src={logo} />
			</StyledLogo>
			<ul>
				<li>Collections</li>
				<li>Men</li>
				<li>Woman</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<Cart />
			<StyledAvatar>
				<img src={avatar} alt="your avatar" />
			</StyledAvatar>
		</StyledBox>
	);
};
