import { MainCanvas } from "../../canvas";
import { Footer } from "../../organisms/Footer";
import { CanvasContainer, HomeContainer } from "./style";
import { User } from "../../../models/user";

interface HomeProps {
  user: User;
}

export const Home = ({ user }: HomeProps) => {
  return (
    <HomeContainer>
      <CanvasContainer>
        <MainCanvas />
      </CanvasContainer>
      <Footer userName={user.userName} userId={user.getUserId()} />
    </HomeContainer>
  );
};
