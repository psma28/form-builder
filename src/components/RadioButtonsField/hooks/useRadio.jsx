import { useEffect, useState } from "react";
import { functionExecutor } from "../../../mappings/APIFunctionMapper";
import { extractEvents } from "../../../utils/extractEventsFromItems";
import { injectEvents } from "../../../utils/eventInjector";

export function useRadio(
  fieldId,
  initialValue,
  initialItems,
  events,
  subevents,
  updateComponent,
  eventHandler,
  setLoading
) {
  const [selected, setSelected] = useState(initialValue);
  const [list, setList] = useState(initialItems);

  useEffect(() => {
    if (typeof list === "string") {
      functionExecutor(list, "", setLoading).then((res) => {
        setList([...injectEvents(subevents,res)]);
      });
    }
  }, [list]);

  if (!Array.isArray(events)) events = [];

  useEffect(() => {
    if (initialValue !== selected) {
      setSelected(initialValue);
      handleSelection(initialValue);
    }
  }, [initialValue]);

  const handleSelection = (value) => {
    const incomingEvents = [...events, ...extractEvents(list, value)];
    setSelected(value);
    eventHandler(fieldId, value, incomingEvents);
    updateComponent(fieldId, { value: value });
  };
  const clearSelection = () => {
    if (selected !== "") setSelected("");
  };

  return { selected, handleSelection, clearSelection, list, setList };
}
