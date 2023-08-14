import { UserMock } from "../../../models/user";
import { useLocation, useRoute } from "wouter";
import { useEffect, useState } from "react";
import { usePortfolio } from "../../../services/PortfolioLoader";
import { MarkdownFile } from "../../../models/markdown";
import { convertMarkdown } from "../../../services/MarkdownFileLoader";

export const useHome = () => {
  const user = UserMock;
  const [, params] = useRoute("/item/:id");
  const [popupId, setPopupId] = useState<number | undefined>(undefined);
  const [, setLocation] = useLocation();
  // Markdown Contents

  const { portfolioData } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false);

  const [markdownFile, setMarkdownFile] = useState<MarkdownFile>();

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

  return {
    user,
    popupId,
    closePopup,
    portfolioData,
    isLoading,
    setIsLoading,
    markdownFile,
    setMarkdownFile,
  };
};
