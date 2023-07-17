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
import { useEffect, useRef } from "react";

interface HomeProps {
  user: User;
  popupId?: number;
  closePopup: () => void;
  markdownContent?: string;
}

export const Home = ({
  user,
  popupId,
  closePopup,
  markdownContent,
}: HomeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closePopup]);
  return (
    <HomeContainer>
      {popupId && (
        <PopupContainer>
          <PopupContent ref={containerRef}>
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
