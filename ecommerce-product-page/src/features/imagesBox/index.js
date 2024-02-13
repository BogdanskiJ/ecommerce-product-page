import { MainImage, SmallImages, StyledImagesBox } from "./styled";
import image1 from "../../images/image-product-1.jpg";
import image2 from "../../images/image-product-2.jpg";
import image3 from "../../images/image-product-3.jpg";
import image4 from "../../images/image-product-4.jpg";

import smallImage1 from "../../images/image-product-1-thumbnail.jpg";
import smallImage2 from "../../images/image-product-2-thumbnail.jpg";
import smallImage3 from "../../images/image-product-3-thumbnail.jpg";
import smallImage4 from "../../images/image-product-4-thumbnail.jpg";

export const ImagesBox = () => {
	return (
		<StyledImagesBox>
			<MainImage>
				<img src={image1} />
			</MainImage>
			<SmallImages>
				<img src={smallImage1} />
				<img src={smallImage2} />
				<img src={smallImage3} />
				<img src={smallImage4} />
			</SmallImages>
		</StyledImagesBox>
	);
};
