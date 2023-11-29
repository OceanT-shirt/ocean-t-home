import { useHome } from "./hooks";
import { CanvasContainer, HomeContainer } from "./style.ts";
import { Popup } from "../../organisms/Popup.tsx";
import { MainCanvas } from "../../canvas";
import { Footer } from "../../organisms/Footer.tsx";
import { OpeningAnimation } from "../../organisms/OpeningAnimation.tsx";

export const HomePage = () => {
  const {
    user,
    popupId,
    closePopup,
    isLoading: isPopupLoading,
    markdownFile,
    portfolioData: portfolios,
    onCanvasLoaded,
    isOpening,
  } = useHome();
  return (
    <>
      <HomeContainer>
        {popupId && (
          <Popup
            markdownFile={markdownFile}
            isLoading={isPopupLoading}
            onClosePopup={closePopup}
          />
        )}
        {isOpening && <OpeningAnimation />}
        <CanvasContainer>
          <MainCanvas portfolios={portfolios} onCanvasLoaded={onCanvasLoaded} />
        </CanvasContainer>
        <Footer userName={user.userName} userId={user.getUserId()} />
      </HomeContainer>
    </>
  );
};
