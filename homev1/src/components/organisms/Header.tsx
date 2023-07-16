import React from "react";
import styled from "@emotion/styled";
import { Text } from "../atoms/Text";
import { FontType } from "../../constants/Font";
import { Color } from "../../constants/Color";

const HeadContainer = styled.header`
  //background: rgba(0, 57, 115, 0.7);
  //backdrop-filter: blur(10.5px);
  //-webkit-backdrop-filter: blur(10.5px);
`;

export default function Header() {
  // const { isLG } = useMediaSize();
  return (
    <HeadContainer
      className={
        "flex-grow grid grid-cols-1 sm:grid-cols-[minmax(240px,1fr),auto,minmax(150px,1fr)] bg-red-100"
      }
    >
      <div
        className={
          "cols-span-1 col-start-1 sm:col-start-2 ml-4 sm:mx-auto my-4 text-4xl text-white"
        }
      >
        <Text fontType={FontType.TITLE1} color={Color.WHITE}>
          Haruka Takahira
        </Text>
      </div>
      <div
        className={
          "cols-span-1 col-start-3 flex flex-row items-center justify-self-end gap-x-4 mr-4"
        }
      >
        {/*<Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ''}>*/}
        {/*  <IconButton icon={FaLinkedin} />*/}
        {/*</Link>*/}
        {/*<Link href={process.env.NEXT_PUBLIC_GITHUB_URL ?? ''}>*/}
        {/*  <IconButton icon={FaGithub} />*/}
        {/*</Link>*/}
        {/*<LocaleSwitcher isCompact={!isLG} />*/}
      </div>
    </HeadContainer>
  );
}
