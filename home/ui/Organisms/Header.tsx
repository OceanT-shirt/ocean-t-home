'use client';

import React from 'react';
import styled from 'styled-components';
import { HeadingText } from '@/ui/Atoms/Text';
import LocaleSwitcher from '@/ui/Molecules/LocaleSwitcher';
import { FaGithub, FaLinkedin } from 'react-icons/all';
import Link from 'next/link';
import { IconButton } from '@/ui/Atoms/IconButton';
import { useMediaSize } from '@/lib/use-media-size';

const HeadContainer = styled.header`
  background: rgba(0, 57, 115, 0.7);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
`;

export default function Header() {
  const { isLG } = useMediaSize();
  return (
    <HeadContainer
      className={'relative flex flex-grow flex-col items-center justify-center'}
    >
      <div className={'mx-auto my-4'}>
        <HeadingText kind={'h1'}>Haruka Takahira</HeadingText>
      </div>
      <div className={'absolute right-6 flex flex-row items-center gap-x-4'}>
        <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ''}>
          <IconButton icon={FaLinkedin} />
        </Link>
        <Link href={process.env.NEXT_PUBLIC_GITHUB_URL ?? ''}>
          <IconButton icon={FaGithub} />
        </Link>
        <LocaleSwitcher isCompact={!isLG} />
      </div>
    </HeadContainer>
  );
}
