import { useEffect, useState } from "react";
import { functionExecutor } from "../../../mappings/APIFunctionMapper";
import { extractEvents } from "../../../utils/extractEventsFromItems";
import { injectEvents } from "../../../utils/eventInjector";

export function useCombobox(
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

  useEffect(() => {
    if (initialValue !== selected) {
      setSelected(initialValue);
    }
    if (initialValue) handleSelection(initialValue);
  }, [initialValue]);

  const handleSelection = async (value) => {
    const incomingEvents = [...events, ...extractEvents(list, value)];
    setSelected(value);
    await eventHandler(fieldId, value, incomingEvents);
    updateComponent(fieldId, { value: value, highlighted: false });
  };
  const clearSelection = () => {
    if (selected !== "") setSelected("");
  };

  return { selected, handleSelection, clearSelection, list, setList };
}
