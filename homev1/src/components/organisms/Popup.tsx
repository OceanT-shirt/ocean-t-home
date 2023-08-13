import styled from "@emotion/styled";
import { useCallback, useEffect, useRef, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { MediaDisplay } from "./MediaDisplay";
import { Button } from "../atoms/Button";
import { Glassmorphism } from "../../constants/Color";
import { Markdown } from "./Markdown";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { MarkdownFile } from "../../models/markdown";

export const Popup = ({
  markdownFile,
  isLoading,
  onClosePopup,
}: {
  markdownFile: MarkdownFile | undefined;
  isLoading: boolean;
  onClosePopup: () => void;
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
  `;

  const PopupContent = styled.div`
    ${Glassmorphism};
    border-radius: 16px;
    width: 80%;
    height: 80%;
    display: grid;
    grid-template-columns: 600px 1fr;
    grid-template-rows: 1fr 80px;
  `;

  const CloseButtonContainer = styled.div`
    position: absolute;
    top: -60px;
    left: 0;
  `;

  const MediaDisplayContainer = styled.div`
    grid-column: 1;
    grid-row: 1/3;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
  `;

  const ArticleContainer = styled.div`
    grid-column: 2;
    grid-row: 1;
    padding: 40px;
  `;

  const BottomContainer = styled.div`
    grid-column: 2;
    grid-row: 2;
    padding-right: 40px;
    padding-left: 40px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    justify-content: flex-start;
  `;

  const duration = 180;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 },
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const [isReady, setIsReady] = useState(false);

  const onClosePopupWithAnimation = useCallback(() => {
    // setIsReady(false);
    setTimeout(() => {
      onClosePopup();
    }, duration + 10);
  }, [onClosePopup]);

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClosePopupWithAnimation();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClosePopupWithAnimation]);

  useEffect(() => {
    if (!isLoading && !isReady) {
      setIsReady(true);
    }
  }, [isLoading, isReady]);

  return (
    <Transition
      in={isReady}
      timeout={duration}
      classNames="fade"
      nodeRef={nodeRef}
      unmountOnExit
    >
      {(state: TransitionStatus) => (
        <PopupContainer
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          ref={nodeRef}
        >
          <PopupContent ref={containerRef}>
            <CloseButtonContainer>
              <Button
                buttonType={"close"}
                onClick={onClosePopupWithAnimation}
              />
            </CloseButtonContainer>
            <MediaDisplayContainer>
              {isReady && !isLoading && (
                <MediaDisplay
                  mediaArray={
                    markdownFile?.attributes?.images
                      ? markdownFile?.attributes?.images.map((image) => ({
                          alt: image.alt,
                          url: image.href,
                          type: "img",
                        }))
                      : []
                  }
                />
              )}
            </MediaDisplayContainer>
            <ArticleContainer>
              <Markdown mdContent={markdownFile?.body ?? ""} />
            </ArticleContainer>
            <BottomContainer>
              {markdownFile?.attributes?.url &&
                markdownFile?.attributes?.url.map((url) => {
                  if (url.title === "GitHub") {
                    return (
                      <Button
                        key={url.title}
                        buttonType={"link"}
                        title={url.title}
                        ReactIcon={FaGithub}
                        onClick={() => {
                          window.open(url.url, "_blank");
                        }}
                      />
                    );
                  } else {
                    return (
                      <Button
                        key={url.title}
                        buttonType={"link"}
                        title={url.title}
                        ReactIcon={FaExternalLinkSquareAlt}
                        onClick={() => {
                          window.open(url.url, "_blank");
                        }}
                      />
                    );
                  }
                })}
            </BottomContainer>
          </PopupContent>
        </PopupContainer>
      )}
    </Transition>
  );
};
