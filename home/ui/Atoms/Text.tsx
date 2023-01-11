'use client';

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { Color } from '../../constants/Color';

// TODO: modify invalid override of ...props
const StyledParagraph = styled.p<{
  kind?: 'default' | 'title' | 'subtitle' | 'header';
}>``;

export function Text({
  kind = 'default',
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  kind?: 'default' | 'title' | 'subtitle' | 'header';
}) {
  return (
    <StyledParagraph
      className={clsx(
        'truncate',
        kind == 'title' && 'text-2xl font-bold text-brand-text',
        kind == 'subtitle' && 'text-xl font-bold text-brand-main',
        kind == 'default' && 'text-base',
        kind == 'header' &&
          'text-base font-semibold tracking-wider text-zinc-500',
        className ?? '',
      )}
      kind={kind}
      {...props}
    >
      {children}
    </StyledParagraph>
  );
}

const StyledH1 = styled.h1`
  //color: ${Color.WHITE};
`;
const StyledH2 = styled.h2`
  color: ${Color.TEXT};
`;

// @dev h1 should be only used once in a webpage: https://developer.mozilla.org/ja/docs/Web/HTML/Element/Heading_Elements

export function HeadingText({
  kind = 'h1',
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  kind?: 'h1' | 'h2';
}) {
  switch (kind) {
    case 'h1':
      return (
        <StyledH1
          className={
            'truncate text-lg font-semibold uppercase tracking-wider text-zinc-200'
          }
          {...props}
        >
          {children}
        </StyledH1>
      );
    case 'h2':
      return (
        <StyledH2 className={'truncate text-4xl font-bold'} {...props}>
          {children}
        </StyledH2>
      );
  }
}
