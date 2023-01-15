'use client';

import React from 'react';
import styled from 'styled-components';
import { HeadingText } from '@/ui/Atoms/Text';
import LocaleSwitcher from '@/ui/Molecules/LocaleSwitcher';
import { FaGithub, FaLinkedin } from 'react-icons/all';
import Link from 'next/link';
import { IconButton } from '@/ui/Atoms/IconButton';

const HeadContainer = styled.header`
  background: rgba(0, 57, 115, 0.7);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
`;

export default function Header() {
  return (
    <HeadContainer
      className={
        'relative flex h-16 flex-grow flex-col content-center items-center'
      }
    >
      <div className={'h-16 items-center'}>
        <HeadingText kind={'h1'} className={'my-auto'}>
          Haruka Takahira
        </HeadingText>
      </div>
      {/*<div*/}
      {/*  className={*/}
      {/*    'r-6 absolute flex flex-row items-center gap-x-4 justify-self-end'*/}
      {/*  }*/}
      {/*>*/}
      {/*  <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ''}>*/}
      {/*    <IconButton icon={FaLinkedin} />*/}
      {/*  </Link>*/}
      {/*  <Link href={process.env.NEXT_PUBLIC_GITHUB_URL ?? ''}>*/}
      {/*    <IconButton icon={FaGithub} />*/}
      {/*  </Link>*/}
      {/*  <LocaleSwitcher />*/}
      {/*</div>*/}
    </HeadContainer>
  );
}
