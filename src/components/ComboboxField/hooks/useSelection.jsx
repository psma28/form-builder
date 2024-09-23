import { useState } from "react";

export const useSelection = (stateHandler) => {
  const [selected, setSelected] = useState("");
  const handleSelection = (label, value) => {
    setSelected(value);
    stateHandler(label, value);
  };
  return { selected, handleSelection };
};
