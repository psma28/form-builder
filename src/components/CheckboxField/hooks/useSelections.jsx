import { useEffect, useState } from "react";

export function useSelections(
  initialValue,
  stateHandler,
  manualCollapse,
  getComponent,
  eventHandler,
  fieldId
) {
  if (!initialValue) initialValue = [];
  const [selections, setSelections] = useState(initialValue);

  useEffect(()=>{
    const componentSchema = getComponent(fieldId);
    let componentEvents = componentSchema?.events;
    if (!Array.isArray(componentEvents) || selections.length===0) componentEvents = [];
    eventHandler(fieldId, selections, componentEvents);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selections])

  const handleSelection = (id, item) => {
    console.log("handling checkbox", item);
    let itemEvents = item?.events;
    if (!Array.isArray(itemEvents)) itemEvents = [];
    

    let aux = [...selections];
    if (checkItem(item)) {
      delete aux[aux.indexOf(item.value)];
      console.log("should manually collapse", item);
      manualCollapse(item.id);
      aux = aux.filter((e) => e);
    } else {
      eventHandler(item.id, item.value, itemEvents);
      aux.push(item.value);
    } 

    //May require to attach an array value for certain payload functions
    //eventHandler(id, item.value, componentEvents)
    
    stateHandler(id, aux);
    setSelections([...aux]);
  };

  const clearSelection = () => {
    if (selections.length!==0) setSelections([]);
  };

  const checkItem = (item) => {
    const res = selections.find((element) => element === item.value);
    return res === undefined ? "" : true;
  };

  return { checkItem, handleSelection, clearSelection };
}

