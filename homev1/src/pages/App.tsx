import React, { useMemo } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { HomePage } from "../components/pages/Home";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";

const PageContainer = styled.div`
  ${tw`flex-grow flex flex-col bg-black`}
`;

enum Controls {
  forward = "forward",
  backward = "backward",
  left = "left",
  right = "right",
  jump = "jump",
}

function App() {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.backward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    [],
  );
  return (
    <KeyboardControls map={map}>
      <PageContainer>
        <HomePage />
      </PageContainer>
    </KeyboardControls>
  );
}

export default App;
