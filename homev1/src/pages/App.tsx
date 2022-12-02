import React from 'react';
import styled from '@emotion/styled'
import tw from "twin.macro";
import { HomePage } from "../components/pages/Home"

const PageContainer = styled.div`
  ${tw`flex-grow flex flex-col bg-black`}
`

function App() {
  return (
      <PageContainer>
          <HomePage />
      </PageContainer>
  );
}

export default App;
