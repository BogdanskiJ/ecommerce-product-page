import styled from "styled-components";

export const StyledImagesBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 40px;
	margin: 0 5%;
`;

export const MainImage = styled.div`
	border-radius: 20px;

	img {
		max-width: 100%;
		border-radius: 20px;
		cursor: pointer;
	}
`;

export const SmallImages = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	img {
		cursor: pointer;
		max-width: 20%;
		border-radius: 10px;
	}
`;
