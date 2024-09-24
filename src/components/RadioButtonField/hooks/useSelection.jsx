import { useState } from "react";

export function useSelection(
  initialValue,
  stateHandler,
  getComponent,
  eventHandler,
) {
  if (!initialValue) initialValue = "";
  const [selected, setSelected] = useState(initialValue);

  const handleSelection = (id, value) => {
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
