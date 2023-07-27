import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
import { MainFont, SubTitleFont, TitleFont } from "../../constants/Font";

export const Markdown = ({ mdContent }: { mdContent: string }) => {
  const MdTitle = styled.h2`
    ${TitleFont}
  `;
  const MdSubHeading = styled.h3`
    ${SubTitleFont}
  `;
  const MdParagraph = styled.p`
    ${MainFont}
  `;
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <MdTitle {...props} />,
        h2: ({ node, ...props }) => <MdSubHeading {...props} />,
        p: ({ node, ...props }) => <MdParagraph {...props} />,
      }}
    >
      {mdContent}
    </ReactMarkdown>
  );
};
