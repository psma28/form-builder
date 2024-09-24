import "./index.css";
import { useContext, useEffect } from "react";
import { EventManagerContext } from "../../context/EventManagerContext";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { FormHandlerContext } from "../../context/FormHandlerContext";
import { InfoPopup } from "../InfoPin";
import { useSelections } from "./hooks/useSelections";

export function CheckboxField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { getComponent, eventHandler, collapseEvents } =
    useContext(EventManagerContext);
  const { updateForm, getFieldValue } = useContext(FormHandlerContext);
  const value = getFieldValue(id);
  const { handleSelection, checkItem, clearSelection } = useSelections(
    value,
    updateForm,
    collapseEvents,
    getComponent,
    eventHandler,
    id
  );
  useEffect(() => {
    if (!value) clearSelection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  if (!getComponent(id)) return <></>;
  const { label, visible = true, items = [], info } = getComponent(id);

  return (
    visible &&
    Array.isArray(items) &&
    items.length > 0 && (
      <div className="checkbox-container">
        <div className="checkbox-label">
          <span className="text-field-label">{label}</span>
          {info && <InfoPopup info={info} />}
        </div>
        <div
          className={
            "checkbox-options" +
            (getFieldStatus() === false ? " disabled-checkbox" : "")
          }
        >
          {items.map((item) => {
            return (
              <div className="checkbox-item" key={item.id}>
                <label className="text-field-label">
                  <input
                    type="checkbox"
                    value={item.value}
                    disabled={!getFieldStatus()}
                    checked={checkItem(item)}
                    onChange={() => {
                      handleSelection(id, item);
                    }}
                  />
                  <span className="checkbox-checkmark"></span>
                  <span>{item.label}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
