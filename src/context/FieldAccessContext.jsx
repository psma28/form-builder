import { createContext, useState } from "react";

export const FieldAccessContext = createContext();

export function FieldAccessProvider({ children }) {
  const [enabled, setEnabled] = useState(false);

  const setFieldAccess = (value) => {
    setEnabled(value);
  };

  const getFieldStatus = () => {
    return enabled;
  };

  return (
    <FieldAccessContext.Provider
      value={{ setFieldAccess, getFieldStatus }}
    >
      {children}
    </FieldAccessContext.Provider>
  );
}
