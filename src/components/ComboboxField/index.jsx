import "./index.css"
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { FormHandlerContext } from "../../context/FormHandlerContext";
import { useSelection } from "./hooks/useSelection";
import { EventManagerContext } from "../../context/EventManagerContext";

export function ComboboxField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { updateForm } = useContext(FormHandlerContext);
  const { getComponent, eventHandler } = useContext(EventManagerContext);

  /** 
  const handleSelection = (itemId) => {
    setSelection(itemId);
    const fullItem = getItemFromSchema(itemId);
    const incomingEvents = getEvents(fullItem);
    eventTrigger(id, fullItem.value, [...events, ...incomingEvents]);
  };
*/
  const { selected, handleSelection } = useSelection(updateForm);
  if (!getComponent(id)) return <></>;
  const {
    label,
    placeholder,
    items = [],
    visible = true,
    events = []
  } = getComponent(id);
  return visible && (
    <div className="field-container">
      <div className="field-label">
        <span className="text-field-label">{label}</span>
      </div>
      <select
        className={
          "field-select text-field-label " +
          (getFieldStatus() === false ? "disabled-combobox" : "")
        }
        name={label}
        id={label}
        value={selected}
        disabled={!getFieldStatus()}
        onChange={(e) => handleSelection(id, e.target.value)}
      >
        <option value="" label={`Seleccione ${placeholder}`}></option>
        {items.map((item, index) => {
          return (
            <option value={item.value} label={item.label} key={index}></option>
          );
        })}
      </select>
      <div></div>
    </div>
  );

}
