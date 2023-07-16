import { Home } from "../../templetes/Home";
import { useHome } from "./hooks";

export const HomePage = () => {
  const { user, popupId, closePopup, markdownContent } = useHome();
  return (
    <>
      <Home
        user={user}
        popupId={popupId}
        closePopup={closePopup}
        markdownContent={markdownContent}
      />
    </>
  );
};
