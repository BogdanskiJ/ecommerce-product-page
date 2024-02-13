import { Header } from "./features/header";
import { ImagesBox } from "./features/imagesBox";
import { DetailBox } from "./features/detailBox";
import { MainPage, StyledApp } from "./styled";

function App() {
	return (
		<StyledApp>
			<Header />
			<MainPage>
				<ImagesBox />
				<DetailBox />
			</MainPage>
		</StyledApp>
	);
}

export default App;
