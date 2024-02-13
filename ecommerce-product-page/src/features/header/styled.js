import styled from "styled-components";

export const StyledBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 40px 0;

	border-bottom: 1px solid ${({ theme }) => theme.color.grayishBlue};

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-right: auto;
		gap: 30px;
		padding-left: 70px;
	}

	li {
		cursor: pointer;
		list-style: none;
		font-family: "Kumbh Sans", sans-serif;
		font-size: 18px;
		font-weight: 400;
		color: ${({ theme }) => theme.color.grayishBlue};
	}
`;

export const StyledAvatar = styled.div`
	border-radius: 50%;
	overflow: hidden;

	img {
		width: 60px;
		cursor: pointer;
	}
`;

export const StyledLogo = styled.div`
	img {
		height: 23px;
		cursor: pointer;
	}
`;

// export const theme = {
// 	color: {
// 		black: "#000000",
// 		white: "#FFFFFF",
// 		orange: "hsl(26, 100%, 55%)",
// 		paleOrange: "hsl(25, 100%, 94%)",
// 		veryDarkBlue: "hsl(220, 13%, 13%)",
// 		darkGrayishBlue: "hsl(219, 9%, 45%)",
// 		grayishBlue: "hsl(220, 14%, 75%)",
// 		lightGrayishBlue: "hsl(223, 64%, 98%)",
// 	},
// 	breakpoint: {
// 		xs: 0,
// 		sm: `576px`,
// 		md: `768px`,
// 		lg: `992px`,
// 		xl: `1200px`,
// 		xxl: `1400px`,
// 	},
// };

// - Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)

// - Font size (paragraph): 16px

// - Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
// - Weights: 400, 700
