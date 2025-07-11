import "./index.css";
import { useContext, useEffect } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { LoadingContext } from "../../context/LoadingContext";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import { useCheckBox } from "./hooks/useCheckbox";
import { InfoPopup } from "../InfoPin";

export function CheckboxField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { setLoading } = useContext(LoadingContext);
  const { getComponent, updateComponent, eventHandler, collapseEvents } =
    useContext(FormSchemaContext);
  let {
    label,
    value = [],
    items,
    highlighted = false,
    events = [],
    subevents = [],
    visible = true,
    single = false,
    info,
    extend = false,
  } = getComponent(id);
  const { handleSelection, clearSelection, list, setList, isChecked } =
    useCheckBox(
      id,
      value,
      items,
      events,
      subevents,
      updateComponent,
      eventHandler,
      collapseEvents,
      setLoading,
      single
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
          "checkbox-container " +
          (extend === false ? "half-field" : "full-field")
        }
      >
        <div className="checkbox-label">
          <span className="text-field-label">{label}</span>
          {info && <InfoPopup info={info} />}
        </div>
        <div
          className={
            "checkbox-options" +
            (getFieldStatus() === false ? " disabled-checkbox" : "") +
            (highlighted ? " checkbox-flaged" : "")
          }
        >
          {list.map((item) => {
            return (
              <div className="checkbox-item" key={item.id}>
                <label className="text-field-label">
                  <input
                    type="checkbox"
                    value={item.value}
                    disabled={!getFieldStatus()}
                    checked={isChecked(item)}
                    onChange={() => {
                      handleSelection(item);
                    }}
                  />
                  <span className="checkbox-checkmark"></span>
                  <span>{item.label}</span>
                  {item.info && (
                    <InfoPopup key={`info${item.id}`} info={item.info} />
                  )}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
