'use client';

import React from 'react';
import styled from 'styled-components';
import { HeadingText } from '@/ui/Atoms/Text';
import LocaleSwitcher from '@/ui/Molecules/LocaleSwitcher';
import { FaGithub, FaLinkedin } from 'react-icons/all';
import { Color } from '../../constants/Color';
import Link from 'next/link';

const HeadContainer = styled.header`
  background: rgba(0, 57, 115, 0.7);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
`;

export default function Header() {
  return (
    <HeadContainer className={'grid h-16 flex-grow grid-cols-3 content-center'}>
      <div
        className={
          'col-span-1 col-start-2 flex flex-col justify-center justify-self-center'
        }
      >
        <HeadingText kind={'h1'}>Haruka Takahira</HeadingText>
      </div>
      <div
        className={
          'col-span-1 flex flex-row items-center gap-x-4 justify-self-end pr-6'
        }
      >
        <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ''}>
          <FaLinkedin color={Color.BACKGROUND} />
        </Link>
        <Link href={process.env.NEXT_PUBLIC_GITHUB_URL ?? ''}>
          <FaGithub color={Color.BACKGROUND} />
        </Link>
        <LocaleSwitcher />
      </div>
    </HeadContainer>
  );
}
