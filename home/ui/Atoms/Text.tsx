'use client';

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import clsx from 'clsx';
import { Color } from '../../constants/Color';

// TODO: modify invalid override of ...props
const StyledParagraph = styled.p<{
  kind?: 'default' | 'title' | 'subtitle';
}>`
  color: ${Color.TEXT};
  ${({ kind }) => {
    // if (kind == 'default')
    //   return css`
    //     color: blue;
    //   `;
    if (kind == 'subtitle')
      return css`
        color: ${Color.BRANDMAIN};
      `;
  }}
`;
StyledParagraph.defaultProps = {
  kind: 'default',
};

export function Text({
  kind = 'default',
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  kind?: 'default' | 'title' | 'subtitle';
}) {
  return (
    <StyledParagraph
      className={clsx(
        kind == 'title' && 'text-2xl font-bold',
        kind == 'subtitle' && 'text-xl font-bold',
        kind == 'default' && 'text-base',
      )}
      kind={kind}
      {...props}
    >
      {children}
    </StyledParagraph>
  );
}

const StyledH1 = styled.h1`
  color: ${Color.TEXT};
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
      return <StyledH1 {...props}>{children}</StyledH1>;
    case 'h2':
      return (
        <StyledH2 className={'text-4xl font-bold'} {...props}>
          {children}
        </StyledH2>
      );
  }
}
