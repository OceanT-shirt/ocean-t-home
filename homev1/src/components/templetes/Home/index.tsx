import { MainCanvas } from "../../canvas";
import {Footer} from "../../organisms/Footer";
import {CanvasContainer, HomeContainer } from "./style";

export const Home = () => {
    return (
        <HomeContainer>
            <CanvasContainer>
                <MainCanvas />
            </CanvasContainer>
            <Footer />
        </HomeContainer>
    )
}