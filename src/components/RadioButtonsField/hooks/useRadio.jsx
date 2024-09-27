import { useEffect, useState } from "react";
import { functionExecutor } from "../../../mappings/APIFunctionMapper";
import { itemMapper } from "../../../mappings/ResponseMapper";
import { extractEvents } from "../../../utils/extractEventsFromItems"

export function useRadio(
  fieldId,
  initialValue,
  initialItems,
  events,
  updateComponent,
  eventHandler,
  setLoading
) {
  const [selected, setSelected] = useState(initialValue);
  const [list, setList] = useState(initialItems);

  useEffect(() => {
    if (typeof list === "string") {
      functionExecutor(list, "", setLoading).then((res) => {
        setList([...itemMapper(res)]);
      });
    }
  }, [list]);

  if (!Array.isArray(events)) events = [];

  useEffect(()=>{
    if (initialValue !== selected) {
        setSelected(initialValue)
        handleSelection(initialValue)
      }
  },[initialValue])
  
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
