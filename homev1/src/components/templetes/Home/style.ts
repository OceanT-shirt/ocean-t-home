import styled from '@emotion/styled';
import tw from 'twin.macro';

export const HomeContainer = styled.div`
  min-width: 30rem;
  width: 100vw;
  max-width: 90rem;
  ${tw`flex flex-col mx-auto my-0`}
`;

export const CanvasContainer = styled.div`
  ${tw`aspect-video`}
`
