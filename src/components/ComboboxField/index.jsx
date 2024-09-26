import "./index.css";
import { useContext, useEffect } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { FormHandlerContext } from "../../context/FormHandlerContext";
import { useSelection } from "./hooks/useSelection";
import { EventManagerContext } from "../../context/EventManagerContext";
import { InfoPopup } from "../InfoPin";

export function ComboboxField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { updateForm, getFieldValue } = useContext(FormHandlerContext);
  const { getComponent, eventHandler } = useContext(EventManagerContext);
  const { selected, handleSelection, clearSelection } = useSelection(
    updateForm,
    getComponent,
    eventHandler
  );
  const value = getFieldValue(id);

  useEffect(() => {
    if (!value) clearSelection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!getComponent(id)) return <></>;
  const {
    label,
    placeholder,
    items = [],
    visible = true,
    info,
  } = getComponent(id);
  return (
    visible &&
    items.length > 0 &&
    Array.isArray(items) && (
      <div className="field-container">
        <div className="field-label">
          <span className="text-field-label">{label}</span>
          {info && <InfoPopup info={info} />}
        </div>
        <select
          className={
            "field-select text-field-label " +
            (getFieldStatus() === false ? "disabled-combobox" : "")
          }
          name={label}
          id={label}
          value={value}
          disabled={!getFieldStatus()}
          onChange={(e) => handleSelection(id, e.target.value)}
        >
          <option value="" disabled={selected !== ""} label={placeholder} />
          {items.map((item, index) => {
            return (
              <option
                value={item.value}
                label={item.label}
                key={index}
              ></option>
            );
          })}
        </select>
        <div></div>
      </div>
    )
  );
}
