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

  /**
   * La carga de los items se debe ejecutar si "items" es una cadena
   * lo cual sucede al incluir seeders en el render del form
   */
  useEffect(() => {
    if (typeof list === "string") {
      functionExecutor(list, "", setLoading).then((res) => {
        setList([...injectEvents(subevents, res)]);
      });
    }
  }, [list]);

  /**
   * Los eventos del componente global se ejecutan cada que se realice
   * un cambio en alguno de sus elementos
   */
  useEffect(() => {
    let componentEvents = events;
    if (!Array.isArray(events) || selections.length === 0) componentEvents = [];
    eventHandler(fieldId, selections, componentEvents);
  }, [selections]);

  /**
   * Si los valores se cargan al introducir rut
   */
  useEffect(() => {
    if (!arrayEquals(initialValues, selections)) {
      setSelections(initialValues);
      if (!initialValues) return;
      initialValues.forEach((value) => {
        handleSelection(value);
      });
      return;
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
    updateComponent(fieldId, { value: [...aux], highlighted: false });
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
    selections,
  };
}
