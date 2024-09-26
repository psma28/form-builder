import { useEffect, useState } from "react";

export function useCAF(
  initialValue,
  updateForm,
  manualCollapse,
  getComponent,
  eventHandler,
  fieldId
) {
  if (!initialValue) initialValue = [];
  /**
   * Selection structure:
   * [ ..., { check: "...", fill: "..."}  ]
   */
  const [selections, setSelections] = useState(initialValue);
  /**
   * Text State structure:
   * { ....., "checkbox item value": "...."}
   */
  const [textState, setTextState] = useState(extractTextState(initialValue));
  /**
   * Component main events are passed
   * to the event handler only if it has any selected
   * items, otherwise an empty list is passed instead.
   * This action executes every time the selections list changes.
   */
  useEffect(() => {
    const componentSchema = getComponent(fieldId);
    let componentEvents = componentSchema?.events;
    if (!Array.isArray(componentEvents) || selections.length === 0)
      componentEvents = [];
    eventHandler(fieldId, selections, componentEvents);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selections]);

  const handleSelection = (id, item) => {
    console.log("handling checkbox", item);
    let itemEvents = item?.events;
    if (!Array.isArray(itemEvents)) itemEvents = [];

    let aux = [...selections];
    if (checkItem(item)) {
      delete aux[getSelectionIndex(aux, item.value)];
      console.log("should manually collapse", item);
      manualCollapse(item.id);
      aux = aux.filter((e) => e);
    } else {
      eventHandler(item.id, item.value, itemEvents);
      aux.push({check: item.value, fill: ""});
    }
    console.log("updating form as");
    
    updateForm(id, aux);
    setSelections([...aux]);
  };

  const clearSelection = () => {
    if (selections.length !== 0) setSelections([]);
  };

  const checkItem = (item) => {
    const res = selections.find((element) => element.check === item.value);
    return res === undefined ? "" : true;
  };

  const getFill = (checkValue) => {
    const fill = textState[checkValue];
    return fill === undefined ? "" : fill;
  };

  const handleFill = (checkValue, fillValue) =>{
    console.log("handle filling field id", checkValue, "with", fillValue);
    console.log("current text,state", textState)
    setTextState(prev => {
        return { ...prev, [checkValue]: fillValue}
    })
  };

  const attachFill = (checkValue) =>{
    const aux = [];
    selections.forEach(element => {
        const copy = {...element};
        if(copy.check===checkValue){
            copy.fill = getFill(checkValue);
        }
        aux.push(copy);
    });
    updateForm(fieldId, aux);
    setSelections([...aux])
  }

  return { checkItem, handleSelection, clearSelection, handleFill, attachFill, getFill };
}

function extractTextState(list) {
  let res = {};
  list.forEach((element) => {
    res = { ...res, [element.check]: element.fill };
  });
  return res;
}

function getSelectionIndex(list, checkValue){
    return list.indexOf(list.find(element => element.check === checkValue))
}