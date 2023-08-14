import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
import { MainFont, SubTitleFont, TitleFont } from "../../constants/Font";

export const Markdown = ({ mdContent }: { mdContent: string }) => {
  const MdTitle = styled.h2`
    ${TitleFont}
  `;
  const MdSubHeading = styled.h3`
    ${SubTitleFont};
    font-size: 1.8rem;
    margin: 2.8rem 0;
  `;
  const MdParagraph = styled.p`
    ${MainFont};
    font-size: 1.2rem;
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
