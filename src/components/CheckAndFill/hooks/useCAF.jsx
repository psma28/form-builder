import { useEffect, useState } from "react";
import { functionExecutor } from "../../../mappings/APIFunctionMapper";
import { itemMapper } from "../../../mappings/ResponseMapper";
import { arrayEquals } from "../../../utils/arrayTools";

export function useCAF(
  fieldId,
  initialValues,
  initialItems,
  events,
  updateComponent,
  eventHandler,
  manualCollapse,
  setLoading
) {
  const [selections, setSelections] = useState(initialValues);
  const [list, setList] = useState(initialItems);
  /**
   * Text State structure:
   * { ....., "checkbox item value": "...."}
   */
  const [textState, setTextState] = useState(extractTextState(initialValues));
  useEffect(() => {
    if (typeof list === "string") {
      console.log("tipo caf", list);
      
      functionExecutor(list, "", setLoading).then((res) => {
        console.log("res", [...itemMapper(res)]);
        
        setList([...itemMapper(res)]);
      });
    }
  }, [list]);

  if (!Array.isArray(events)) events = [];

  useEffect(() => {
    let componentEvents = events;
    if (!Array.isArray(events) || selections.length === 0) componentEvents = [];
    eventHandler(fieldId, selections, componentEvents);
  }, [selections]);

  /**
   *  If values are loaded by any other means
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

  const clearSelection = () => {
    if (selections.length !== 0) setSelections([]);
  };

  const handleSelection = (item) => {
    console.log("handling caf selection", item);

    let itemEvents = item?.events;
    if (!Array.isArray(itemEvents)) itemEvents = [];
    let aux = [...selections];
    if (isChecked(item)) {
      delete aux[getSelectionIndex(aux, item.value)];
      manualCollapse(item.id);
      aux = aux.filter((e) => e);
    } else {
      //Should it execute only when te combobox is filled???
      eventHandler(item.id, item.value, itemEvents);
      aux.push({ check: item.value, fill: "" });
    }
    console.log("after checking cheks, component should update", fieldId, {
      value: [...aux],
    });

    updateComponent(fieldId, { value: [...aux] });
    setSelections([...aux]);
  };

  const isChecked = (item) => {
    if(!selections) return false;
    const res = selections.find((element) => element.check === item.value);
    return res === undefined ? false : true;
  };

  const getCheckFill = (checkValue) => {
    const fill = textState[checkValue];
    return fill === undefined ? "" : fill;
  };

  const handleFill = (checkValue, fillValue) => {
    setTextState((prev) => {
      return { ...prev, [checkValue]: fillValue };
    });
  };

  const attachFill = (checkValue) => {
    const aux = [];
    selections.forEach((element) => {
      const copy = { ...element };
      if (copy.check === checkValue) {
        copy.fill = getCheckFill(checkValue);
      }
      aux.push(copy);
    });
    updateComponent(fieldId, { value: [...aux] });
    setSelections([...aux]);
  };

  return {
    isChecked,
    handleSelection,
    clearSelection,
    handleFill,
    attachFill,
    getCheckFill,
    list,
    setList,
  };
}

/**
 * This function extracts the text state for every field
 * it expects the values coming from outside to be in the next format:
 * [ {check: ....., fill: .....} ]
 * @param {Array} list
 * @returns
 */
function extractTextState(list) {
  let res = {};
  if(!list) return res;
  list.forEach((element) => {
    res = { ...res, [element.check]: element.fill };
  });
  return res;
}

function getSelectionIndex(list, checkValue) {
  return list.indexOf(list.find((element) => element.check === checkValue));
}
