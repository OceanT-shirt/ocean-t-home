import { MainCanvas } from "../../canvas";
import { Footer } from "../../organisms/Footer";
import { CanvasContainer, HomeContainer } from "./style";
import { User } from "../../../models/user";
import { Portfolio } from "../../../models/portfolio";
import { Popup } from "../../organisms/Popup";

interface HomeProps {
  user: User;
  popupId?: number;
  isPopupLoading: boolean;
  closePopup: () => void;
  markdownContent?: string;
  portfolios: Portfolio[];
}

export const Home = ({
  user,
  popupId,
  isPopupLoading,
  closePopup,
  markdownContent,
  portfolios,
}: HomeProps) => {
  return (
    <HomeContainer>
      {popupId && (
        <Popup
          mdContent={markdownContent ?? ""}
          isLoading={isPopupLoading}
          onClosePopup={closePopup}
        />
      )}
      <CanvasContainer>
        <MainCanvas portfolios={portfolios} />
      </CanvasContainer>
      <Footer userName={user.userName} userId={user.getUserId()} />
    </HomeContainer>
  );
};
