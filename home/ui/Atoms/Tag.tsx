'use client';

import styled from '@emotion/styled';
import React from 'react';
import { css } from '@emotion/react';
import { Color } from '../../constants/Color';
import { Text } from '@/ui/Atoms/Text';

interface TagProps {
  kind?: 'default' | 'energetic' | 'pale';
}

const getTagStyle = (kind?: string) => {
  if (kind == 'default') {
    return css`
      background-color: ${Color.BRANDMAIN};
    `;
  }
  return css``;
};

const StyledTag = styled.div<TagProps>`
  ${(props) => getTagStyle(props?.kind)};
`;

export const Tag = ({
  text,
  kind = 'default',
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement> & {
  text: string;
  kind?: 'default' | 'energetic' | 'pale';
}) => {
  return (
    <StyledTag className={'rounded-md px-4 py-2'} kind={kind} {...props}>
      <Text kind={'default'} color={Color.WHITE}>
        {text}
      </Text>
    </StyledTag>
  );
};
