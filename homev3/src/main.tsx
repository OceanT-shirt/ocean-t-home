import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CameraPosProvider } from "./providers/CameraPosProvider";
import { DebugProvider } from "./providers/DebugProvider";
import App from "./pages/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <CameraPosProvider>
      <DebugProvider>
        <App />
      </DebugProvider>
    </CameraPosProvider>
  </React.StrictMode>,
);
