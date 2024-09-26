import { useState } from "react";
import { convertToNumber } from "../../../utils/stringTools";

export function useSelection(stateHandler, getComponent, eventHandler) {
  const [selected, setSelected] = useState("");
  const handleSelection = (id, value) => {
    value = convertToNumber(value);
    const componentSchema = getComponent(id);
    let componentEvents = componentSchema.events;
    let itemEvents = componentSchema.items.find(
      (item) => item.value === value
    )?.events;
    if (!Array.isArray(itemEvents)) itemEvents = [];
    if (!Array.isArray(componentEvents)) componentEvents = [];
    const incomingEvents = [...componentEvents, ...itemEvents];
    setSelected(value);
    eventHandler(id, value, incomingEvents);
    stateHandler(id, value);
  };

  const clearSelection = () => {
    if (selected !== "") setSelected("");
  };
  return { selected, handleSelection, clearSelection };
}
