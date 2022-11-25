import React from 'react';
import styled from '@emotion/styled'
import tw from "twin.macro";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { HomePage } from "../components/pages/Home"

const PageContainer = styled.div`
  ${tw`flex-grow flex flex-col bg-black`}
`

function App() {
  return (
      <PageContainer>
          <BrowserRouter>
              <Routes>
                  <Route index element={<HomePage />} />
              </Routes>
          </BrowserRouter>
      </PageContainer>
  );
}

export default App;
