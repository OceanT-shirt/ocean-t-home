import { useMemo } from "react";
import styled from "@emotion/styled";
import { HomePage } from "../components/pages/Home";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: black;
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
