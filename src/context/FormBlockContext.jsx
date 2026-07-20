import { createContext, useState } from "react";

export const FormBlockContext = createContext();

export function FormBlockProvider({ children }) {
  const [blocked, setBlocked] = useState(false);
  const [blockMessage, setBlockMessage] = useState("");

  const block = (message) => {
    setBlockMessage(message);
    setBlocked(true);
  };

  const unblock = () => {
    setBlockMessage("");
    setBlocked(false);
  };

  return (
    <FormBlockContext.Provider value={{ blocked, blockMessage, block, unblock }}>
      {children}
    </FormBlockContext.Provider>
  );
}
