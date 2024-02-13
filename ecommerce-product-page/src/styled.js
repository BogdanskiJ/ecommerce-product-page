import styled from "styled-components";

export const StyledApp = styled.div`
	max-width: 1400px;
	margin: auto;
`;

export const MainPage = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 100px;

	& > div {
		width: 50%;
	}
`;
