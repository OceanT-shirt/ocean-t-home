import { Home } from "../../templetes/Home";
import { useHome } from "./hooks";

export const HomePage = () => {
  const {
    user,
    popupId,
    closePopup,
    isLoading,
    markdownContent,
    portfolioData,
  } = useHome();
  return (
    <>
      <Home
        user={user}
        popupId={popupId}
        isPopupLoading={isLoading}
        closePopup={closePopup}
        markdownContent={markdownContent}
        portfolios={portfolioData}
      />
    </>
  );
};
