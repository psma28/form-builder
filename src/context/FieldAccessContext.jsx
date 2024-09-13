import { createContext, useState } from "react";

export const FieldAccessContext = createContext();

export const FieldAccessProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(false);

  const toggleFieldAccess = () => {
    setEnabled(!enabled);
  };

  const setFieldAccess = (value) => {
    setEnabled(value);
  };

  const getFieldStatus = () => {
    return enabled;
  };

  return (
    <FieldAccessContext.Provider
      value={{ toggleFieldAccess, setFieldAccess, getFieldStatus }}
    >
      {children}
    </FieldAccessContext.Provider>
  );
};
