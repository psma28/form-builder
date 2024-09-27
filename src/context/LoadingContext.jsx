import { createContext, useState } from "react";

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (value) => {
    setIsLoading(value);
  };

  return (
    <LoadingContext.Provider value={{ setLoading, isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
