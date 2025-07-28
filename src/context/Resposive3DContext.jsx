// Responsive3DContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { getResponsiveModelValues } from "../utils/getResponsiveModelValues"; // Adjust path

const Responsive3DContext = createContext({});

export function Responsive3DProvider({ children }) {
  const [responsiveValues, setResponsiveValues] = useState(
    getResponsiveModelValues()
  );

  useEffect(() => {
    const handleResize = () => {
      setResponsiveValues(getResponsiveModelValues());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Responsive3DContext.Provider value={responsiveValues}>
      {children}
    </Responsive3DContext.Provider>
  );
}

export function useModelResponsive(modelKey) {
  const context = useContext(Responsive3DContext);
  return context[modelKey]; // example: context.logo or context.heart
}
