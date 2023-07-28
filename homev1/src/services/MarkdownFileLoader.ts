import {
  getMarkdownAttributesFromObject,
  MarkdownFile,
} from "../models/markdown";
import fm from "front-matter";

export const convertMarkdown = (markdown: string): MarkdownFile => {
  const { body, attributes } = fm<unknown>(markdown);
  const markdownAttributes = getMarkdownAttributesFromObject(attributes);
  return {
    attributes: markdownAttributes,
    body,
  };
};
