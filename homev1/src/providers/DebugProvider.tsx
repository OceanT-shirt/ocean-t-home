import React, { createContext, ReactNode } from "react";

type DebugContextType = {
  debugAll: boolean;
  debugCamera: boolean;
  canvasLite: boolean;
};

export const DebugContext = createContext<DebugContextType>({
  debugAll: false,
  debugCamera: false,
  canvasLite: false,
});

interface Props {
  children: ReactNode;
}

export const DebugProvider = ({ children }: Props) => {
  const newContext: DebugContextType = {
    debugAll: false,
    debugCamera: false,
    canvasLite: true,
  };
  // TODO add logic to change debugAll and debugCamera

  return (
    <DebugContext.Provider value={newContext}>{children}</DebugContext.Provider>
  );
};
