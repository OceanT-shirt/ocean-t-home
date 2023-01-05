'use client';

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface CustomProps {
  kind?: 'default' | 'title' | 'subtitle' | 'h1' | 'h2';
}

const StyledText = styled.p<CustomProps>`
  color: ${(props) => props?.kind == 'default' && 'pink'};
`;

export default function Text({
  kind = 'default',
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  kind?: 'default' | 'title' | 'subtitle' | 'h1' | 'h2';
}) {
  return (
    <StyledText kind={kind} {...props}>
      {children}
    </StyledText>
  );
}
