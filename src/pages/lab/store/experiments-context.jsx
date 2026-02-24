import { createContext, useState } from "react";

export const ExperimentContext = createContext(null);

export function ExperimentContextProvider({ children }) {
  const [currentExperiment, setCurrentExperiment] = useState();

  return (
    <ExperimentContext
      value={{ currentExperiment, setCurrentExperiment }}
    >
      {children}
    </ExperimentContext>
  );
}
