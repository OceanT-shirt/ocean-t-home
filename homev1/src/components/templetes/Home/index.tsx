import { MainCanvas } from "../../canvas";
import { Footer } from "../../organisms/Footer";
import { CanvasContainer, HomeContainer } from "./style";
import { User } from "../../../models/user";

interface HomeProps {
  user: User;
  popupId?: number;
  closePopup?: () => void;
}

export const Home = ({ user, popupId, closePopup }: HomeProps) => {
  return (
    <HomeContainer>
      {popupId && (
        <div style={{ color: "white" }}>
          <text>popup {popupId}</text>
          <button title={"close"} onClick={closePopup} />
        </div>
      )}
      <CanvasContainer>
        <MainCanvas />
      </CanvasContainer>
      <Footer userName={user.userName} userId={user.getUserId()} />
    </HomeContainer>
  );
};
