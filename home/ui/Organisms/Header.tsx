'use client';

import React from 'react';
import styled from 'styled-components';
import { HeadingText, Text } from '@/ui/Atoms/Text';

const HeadContainer = styled.header`
  position: relative;
  height: 64px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 0 solid #e5e7eb;
  color: rgb(0 0 0);
  flex-grow: 1;
`;

export default function Header() {
  return (
    <HeadContainer>
      {/*<NextJsLogo />*/}
      <HeadingText kind={'h1'}>Haruka Takahira</HeadingText>
    </HeadContainer>
  );
}
