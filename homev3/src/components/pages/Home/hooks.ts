import { UserMock } from "../../../models/user";
import { useLocation, useRoute } from "wouter";
import { useCallback, useEffect, useState } from "react";
import { usePortfolio } from "../../../services/PortfolioLoader";
import { MarkdownFile } from "../../../models/markdown";
import { convertMarkdown } from "../../../services/MarkdownFileLoader";
import { useAnimation } from "../../../hooks/useAnimation.ts";
import {
  animationHandlerAtom,
  getIsAnimationReady,
} from "../../../recoil/animation.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const useHome = () => {
  const user = UserMock;
  const [, params] = useRoute("/item/:id");
  const [popupId, setPopupId] = useState<number | undefined>(undefined);
  const [, setLocation] = useLocation();
  const { animateDAG } = useAnimation();
  const setAnimationHandler = useSetRecoilState(animationHandlerAtom);
  const isAnimationReady = useRecoilValue(getIsAnimationReady);
  // Markdown Contents

  const { portfolioData } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false);

  const [markdownFile, setMarkdownFile] = useState<MarkdownFile>();

  // Canvasの読み込みを検知
  const [canvasLoading, setCanvasLoading] = useState(true);
  const onCanvasLoaded = () => {
    setCanvasLoading(false);
  };

  // TODO - this is a side effect, should be moved to a service

  useEffect(() => {
    setIsLoading(true);
    const fetchMarkdown = async () => {
      if (!popupId) {
        return;
      }
      try {
        const response = await fetch(`/articles/${popupId}.md`);
        if (
          response.ok &&
          response.headers.get("content-type")?.includes("text/markdown")
        ) {
          const markdown = await response.text();
          const markdownFile = convertMarkdown(markdown);
          setMarkdownFile(markdownFile);
        } else {
          setMarkdownFile({
            attributes: {
              title: "FETCH ERROR",
              images: [],
              url: [],
            },
            body: "# FETCH ERROR",
          });
        }
      } catch (error) {
        console.error("Failed to fetch markdown:", error);
        setMarkdownFile({
          attributes: {
            title: "FETCH ERROR",
            images: [],
            url: [],
          },
          body: "# FETCH ERROR",
        });
      }
    };
    fetchMarkdown().then(() => {
      setIsLoading(false);
    });
  }, [popupId]);

  const closePopup = () => {
    setMarkdownFile(undefined);
    setLocation("/");
  };

  useEffect(() => {
    if (params?.id) {
      setPopupId(Number(params?.id));
    } else {
      setPopupId(undefined);
    }
  }, [params?.id]);

  // アニメーション管理
  const [isOpening, setIsOpening] = useState(false);
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);

  const openingAnimationHandler = useCallback(async () => {
    setIsOpening(true);
    // TODO setTimeoutのタイマーがクリーンアップされない
    setTimeout(() => {
      setIsOpening(false);
    }, 1000);
  }, [setIsOpening]);

  useEffect(() => {
    setAnimationHandler((prev) => ({
      ...prev,
      opening: openingAnimationHandler,
    }));
  }, [setAnimationHandler, openingAnimationHandler]);

  useEffect(() => {
    if (!isAnimationReady || isAnimationTriggered) return;
    animateDAG().catch((error) => {
      console.error("Error executing animation DAG:", error);
    });
    setIsAnimationTriggered(true);
  }, [animateDAG, isAnimationReady, isAnimationTriggered]);

  return {
    user,
    popupId,
    closePopup,
    portfolioData,
    isLoading,
    setIsLoading,
    markdownFile,
    setMarkdownFile,
    onCanvasLoaded,
    animateDAG,
    isOpening,
  };
};
