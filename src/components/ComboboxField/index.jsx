import "./index.css";
import { useContext, useEffect } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import { LoadingContext } from "../../context/LoadingContext";
import { InfoPopup } from "../InfoPin";
import { useCombobox } from "./hooks/useCombobox";

export function ComboboxField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { setLoading } = useContext(LoadingContext);
  const { getComponent, updateComponent, eventHandler } =
    useContext(FormSchemaContext);
  let {
    label,
    value,
    placeholder,
    items,
    highlighted = false,
    events = [],
    subevents = [],
    visible = true,
    info,
    extend = false,
  } = getComponent(id);
  const { selected, handleSelection, clearSelection, list, setList } =
    useCombobox(
      id,
      value,
      items,
      events,
      subevents,
      updateComponent,
      eventHandler,
      setLoading
    );
  useEffect(() => {
    if (!value) clearSelection();
  }, [value]);

  useEffect(() => {
    if (setList) setList(items);
  }, [items]);

  return (
    visible &&
    Array.isArray(list) &&
    list.length > 0 && (
      <div
        className={
          "field-container " + (extend === false ? "half-field" : "full-field")
        }
      >
        <div className="field-label">
          <span className="text-field-label">{label}</span>
          {info && <InfoPopup info={info} />}
        </div>
        <select
          className={
            "field-select text-field-label " +
            (getFieldStatus() === false
              ? " disabled-combobox"
              : highlighted === true
              ? " combobox-flaged"
              : " normal-combobox")
          }
          name={label}
          id={label}
          value={value}
          disabled={!getFieldStatus()}
          onChange={(e) => handleSelection(e.target.value)}
        >
          <option value="" disabled={selected !== ""} label={placeholder} />
          {list.map((item, index) => {
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
