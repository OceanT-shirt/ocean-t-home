import { Home } from "../../templetes/Home";
import { useHome } from "./hooks";

export const HomePage = () => {
  const { user, popupId, closePopup, isLoading, markdownFile, portfolioData } =
    useHome();
  return (
    <>
      <Home
        user={user}
        popupId={popupId}
        isPopupLoading={isLoading}
        closePopup={closePopup}
        markdownFile={markdownFile}
        portfolios={portfolioData}
      />
    </>
  );
};
