'use client';

import React from 'react';
import styled from 'styled-components';

const HeadContainer = styled.header`
  position: relative;
  height: 64px;
  align-items: center;
  justify-self: center;
  display: flex;
  border: 0 solid #e5e7eb;
  color: rgb(0 0 0);
  background-color: #AAAAAA;
  flex-grow: 1;
`;

const Title = styled.span`
  margin: 0 auto;
`;

export default function Header() {
  return (
    <HeadContainer>
      {/*<NextJsLogo />*/}
      <Title>Haruka Takahira</Title>
    </HeadContainer>
  );
}
