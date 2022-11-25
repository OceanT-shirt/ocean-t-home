import { MainCanvas } from "../../canvas";
import {Header} from "../../organisms/Header";
import {CanvasContainer, HomeContainer } from "./style";

export const Home = () => {
    return (
        <HomeContainer>
            <Header />
            <CanvasContainer>
                <MainCanvas />
            </CanvasContainer>
        </HomeContainer>
    )
}