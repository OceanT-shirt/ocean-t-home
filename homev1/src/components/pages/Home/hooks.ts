import { UserMock } from "../../../models/user";
import { useLocation, useRoute } from "wouter";
import { useEffect, useState } from "react";
import fm from "front-matter";
import { usePortfolio } from "../../../services/PortfolioLoader";
import {
  ImageAttributes,
  MarkdownAttributes,
  UrlAttributes,
} from "../../../models/markdown";

export const useHome = () => {
  const user = UserMock;
  const [, params] = useRoute("/item/:id");
  const [popupId, setPopupId] = useState<number | undefined>(undefined);
  const [, setLocation] = useLocation();
  // Markdown Contents
  const [title, setTitle] = useState("");
  const [images, setImages] = useState<ImageAttributes[]>([]);
  const [url, setUrl] = useState<UrlAttributes[]>([]);
  const [markdownContent, setMarkdownContent] = useState("");

  const { portfolioData } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false);

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
          const { body, attributes } = fm<MarkdownAttributes>(markdown);
          if (attributes.title) {
            setTitle(attributes.title);
          }
          if (attributes.images) {
            setImages(attributes.images);
          }
          if (attributes.url) {
            setUrl(attributes.url);
          }
          setMarkdownContent(body);
        } else {
          setMarkdownContent("# NOT FOUND");
        }
      } catch (error) {
        console.error("Failed to fetch markdown:", error);
        setMarkdownContent("# FETCH ERROR");
      }
    };
    fetchMarkdown().then(() => {
      setIsLoading(false);
    });
  }, [popupId]);

  const closePopup = () => {
    setMarkdownContent("");
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
    markdownContent,
    portfolioData,
    isLoading,
    setIsLoading,
    title,
    images,
    url,
    setTitle,
    setImages,
    setUrl,
  };
};
