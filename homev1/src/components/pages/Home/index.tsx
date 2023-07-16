import { Home } from "../../templetes/Home";
import { useHome } from "./hooks";

export const HomePage = () => {
  const { user, popupId, closePopup } = useHome();
  return (
    <>
      <Home user={user} popupId={popupId} closePopup={closePopup} />
    </>
  );
};
