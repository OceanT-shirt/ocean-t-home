import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CameraPosProvider } from "./providers/CameraPosProvider";
import { DebugProvider } from "./providers/DebugProvider";
import App from "./pages/App";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <CameraPosProvider>
        <DebugProvider>
          <App />
        </DebugProvider>
      </CameraPosProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
