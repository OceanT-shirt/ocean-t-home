import { MainCanvas } from "../../canvas";
import { Footer } from "../../organisms/Footer";
import {
  CanvasContainer,
  HomeContainer,
  PopupContainer,
  PopupContent,
} from "./style";
import { User } from "../../../models/user";
import ReactMarkdown from "react-markdown";

interface HomeProps {
  user: User;
  popupId?: number;
  closePopup?: () => void;
  markdownContent?: string;
}

export const Home = ({
  user,
  popupId,
  closePopup,
  markdownContent,
}: HomeProps) => {
  return (
    <HomeContainer>
      {popupId && (
        <PopupContainer>
          <PopupContent>
            <h1>popup {popupId}</h1>
            <ReactMarkdown>{markdownContent ?? ""}</ReactMarkdown>
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
