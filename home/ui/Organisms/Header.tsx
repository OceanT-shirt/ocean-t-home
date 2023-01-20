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
      className={'flex-grow grid grid-cols-[max(1fr,240px),auto,max(1fr,150px)]'}
    >
      <div className={'cols-span-1 col-start-1 sm:col-start-2 ml-4 sm:mx-auto my-4'}>
        <HeadingText kind={'h1'}>Haruka Takahira</HeadingText>
      </div>
      <div className={'cols-span-1 col-start-3 flex flex-row items-center justify-self-end gap-x-4 mr-4'}>
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
