import styled from "styled-components";
import iconCart from "../../images/icon-cart.svg";

export const StyledDetailBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	margin: 0 5%;
	gap: 10px;

	h1 {
		font-family: "Kumbh Sans", sans-serif;
		font-weight: 700;
		font-size: 60px;
		margin: 20px 0;
	}

	p {
		font-family: "Kumbh Sans", sans-serif;
		font-weight: 400;
		line-height: 1.5;
		font-size: 20px;
		color: ${({ theme }) => theme.color.darkGrayishBlue};
	}
`;

export const StyledTitle = styled.span`
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.orange};
	font-family: "Kumbh Sans", sans-serif;
	font-size: 16px;
	font-weight: 700;
	letter-spacing: 2px;
`;

export const StyledPricesBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: fit-content;
	font-family: "Kumbh Sans", sans-serif;
	gap: 40px;

	span {
		font-size: 35px;
		font-weight: 700;
	}

	div {
		font-size: 20px;
		padding: 5px 10px;
		border-radius: 5px;
		font-weight: 700;
		background: ${({ theme }) => theme.color.paleOrange};
		color: ${({ theme }) => theme.color.orange};
	}
`;

export const StyledOldPrice = styled.div`
	font-size: 20px;
	font-weight: 700;
	color: ${({ theme }) => theme.color.grayishBlue};
	text-decoration: line-through;
	margin-top: 20px;
`;

export const StyledButtonBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 10%;
	width: 100%;
	height: 60px;
	margin-top: 40px;

	button {
		background: ${({ theme }) => theme.color.orange};
		color: ${({ theme }) => theme.color.white};
		border: none;
		padding: 10px 40px;
		border-radius: 10px;
		width: 55%;
		font-family: "Kumbh Sans", sans-serif;
		font-weight: 700;
		line-height: 1.5;
		letter-spacing: 1px;
		font-size: 16px;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: row;
		gap: 20px;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		img {
			filter: brightness(0) saturate(100%) invert(100%) sepia(7%)
				saturate(7500%) hue-rotate(341deg) brightness(106%) contrast(108%);
		}
	}
`;

export const StyledCounterBox = styled.div`
	background: ${({ theme }) => theme.color.lightGrayishBlue};
	color: ${({ theme }) => theme.color.orange};
	border: none;
	border-radius: 10px;
	width: 35%;
	font-family: "Kumbh Sans", sans-serif;
	font-weight: 700;
	line-height: 1.5;
	letter-spacing: 1px;
	font-size: 25px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;

	span {
		padding: 15px;
		text-align: center;
	}
`;

export const Counter = styled.span`
	color: ${({ theme }) => theme.color.veryDarkBlue};
	padding: 0;
	width: 100%;
	cursor: default;
`;

/* veryDarkBlue: "hsl(220, 13%, 13%)",
		darkGrayishBlue: "hsl(219, 9%, 45%)",
		grayishBlue: "hsl(220, 14%, 75%)",
		lightGrayishBlue: "hsl(223, 64%, 98%)",
    
    orange: "hsl(26, 100%, 55%)",
		paleOrange: "hsl(25, 100%, 94%)",
    
    */
