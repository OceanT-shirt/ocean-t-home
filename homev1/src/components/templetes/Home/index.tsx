import { MainCanvas } from "../../canvas";
import { Footer } from "../../organisms/Footer";
import { CanvasContainer, HomeContainer } from "./style";
import { User } from "../../../models/user";
import { Portfolio } from "../../../models/portfolio";
import { Popup } from "../../organisms/Popup";
import { MarkdownFile } from "../../../models/markdown";

interface HomeProps {
  user: User;
  popupId?: number;
  isPopupLoading: boolean;
  closePopup: () => void;
  markdownFile: MarkdownFile | undefined;
  portfolios: Portfolio[];
}

export const Home = ({
  user,
  popupId,
  isPopupLoading,
  closePopup,
  markdownFile,
  portfolios,
}: HomeProps) => {
  return (
    <HomeContainer>
      {popupId && (
        <Popup
          markdownFile={markdownFile}
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
