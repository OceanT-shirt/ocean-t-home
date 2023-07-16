import { UserMock } from "../../../models/user";
import { useLocation, useRoute } from "wouter";
import { useEffect, useState } from "react";
import fm from "front-matter";

export const useHome = () => {
  const user = UserMock;
  const [, params] = useRoute("/item/:id");
  const [popupId, setPopupId] = useState<number | undefined>(undefined);
  const [, setLocation] = useLocation();
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      if (!popupId) {
        return;
      }
      try {
        const response = await fetch(`/articles/${popupId}.md`);
        if (response.ok) {
          const markdown = await response.text();
          const { body } = fm(markdown);
          setMarkdownContent(body);
        }
      } catch (error) {
        console.error("Failed to fetch markdown:", error);
        // closePopup();
      }
    };
    fetchMarkdown();
  }, [popupId]);

  const closePopup = () => {
    setLocation("/");
  };

  useEffect(() => {
    if (params?.id) {
      setPopupId(Number(params?.id));
    } else {
      setPopupId(undefined);
    }
  }, [params?.id]);

  return { user, popupId, closePopup, markdownContent };
};
