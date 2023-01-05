'use client';

import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface TagProps {
  kind?: 'default' | 'energetic' | 'pale';
}

const getTagStyle = (kind?: string) => {
  return 'red';
};

const StyledTag = styled.div<TagProps>`
  color: ${(props) => getTagStyle(props?.kind)};
`;

export const Tag = ({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) => {
  return <StyledTag {...props}>{children}</StyledTag>;
};
