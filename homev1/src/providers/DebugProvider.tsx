import React, { createContext, ReactNode } from "react";

type DebugContextType = {
  debugAll: boolean;
  debugCamera: boolean;
};

export const DebugContext = createContext<DebugContextType>({
  debugAll: false,
  debugCamera: false,
});

interface Props {
  children: ReactNode;
}

export const DebugProvider = ({ children }: Props) => {
  const newContext: DebugContextType = {
    debugAll: false,
    debugCamera: false,
  };
  // TODO add logic to change debugAll and debugCamera

  return (
    <DebugContext.Provider value={newContext}>{children}</DebugContext.Provider>
  );
};
