import { useEffect, useState } from "react";
import { functionExecutor } from "../../../mappings/APIFunctionMapper";
import { injectEvents } from "../../../utils/eventInjector";
import { arrayEquals } from "../../../utils/arrayTools";
export function useCheckBox(
  fieldId,
  initialValues,
  initialItems,
  events,
  subevents,
  updateComponent,
  eventHandler,
  manualCollapse,
  setLoading
) {
  const [selections, setSelections] = useState(initialValues);
  const [list, setList] = useState(initialItems);

  useEffect(() => {    
    if (typeof list === "string") {
      functionExecutor(list, "", setLoading).then((res) => {
        setList([...injectEvents(subevents, res)]);
      });
    }
  }, [list]);

  useEffect(() => {
    let componentEvents = events;
    if (!Array.isArray(events) || selections.length === 0) componentEvents = [];
    eventHandler(fieldId, selections, componentEvents);
  }, [selections]);

  /**
   * Si los valores se cargan junto con el usuario
   */
  useEffect(() => {
    if (!arrayEquals(initialValues, selections)) {
      setSelections(initialValues);
      if (!initialValues) return;
      initialValues.forEach((value) => {
        handleSelection(value);
      });
    }
  }, [initialValues]);

  const handleSelection = (item) => {
    let itemEvents = item?.events;
    if (!Array.isArray(itemEvents)) itemEvents = [];
    let aux = [...selections];
    if (isChecked(item)) {
      delete aux[aux.indexOf(item.value)];
      manualCollapse(item.id);
      aux = aux.filter((e) => e);
    } else {
      eventHandler(item.id, item.value, itemEvents);
      aux.push(item.value);
    }
    updateComponent(fieldId, { value: [...aux] });
    setSelections([...aux]);
  };

  const clearSelection = () => {
    if (selections.length !== 0) setSelections([]);
  };

  const isChecked = (item) => {
    if (!selections) return false;
    const res = selections.find((element) => element === item.value);
    return res === undefined ? false : true;
  };

  return {
    handleSelection,
    clearSelection,
    list,
    setList,
    isChecked,
  };
}
