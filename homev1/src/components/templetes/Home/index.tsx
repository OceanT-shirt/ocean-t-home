import { MainCanvas } from "../../canvas";
import { Footer } from "../../organisms/Footer";
import {
  CanvasContainer,
  HomeContainer,
  PopupContainer,
  PopupContent,
} from "./style";
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
        <PopupContainer>
          <PopupContent>
            <h1>popup {popupId}</h1>
            <button onClick={closePopup}>Close</button>
          </PopupContent>
        </PopupContainer>
      )}
      <CanvasContainer>
        <MainCanvas />
      </CanvasContainer>
      <Footer userName={user.userName} userId={user.getUserId()} />
    </HomeContainer>
  );
};
