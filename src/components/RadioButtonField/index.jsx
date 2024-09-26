import "./index.css";
import { useContext, useEffect } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { EventManagerContext } from "../../context/EventManagerContext";
import { InfoPopup } from "../InfoPin";
import { FormHandlerContext } from "../../context/FormHandlerContext";
import { useSelection } from "./hooks/useSelection";

export function RadioButtonField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { getComponent, eventHandler } = useContext(EventManagerContext);
  const { updateForm, getFieldValue } = useContext(FormHandlerContext);
  const value = getFieldValue(id);
  const { selected, handleSelection, clearSelection } = useSelection(
    value,
    updateForm,
    getComponent,
    eventHandler
  );

  useEffect(() => {
    if (!value) clearSelection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!getComponent(id)) return <></>;
  const { label, visible = true, items = [], info, extend=false } = getComponent(id);
  return (
    visible &&
    items.length > 0 &&
    Array.isArray(items) && (
      <div className={"radio-container " +
        (extend === false ? "half-field" : "full-field") 
      }>
        <div className="radio-label">
          <span className="text-field-label">{label}</span>
          {info && <InfoPopup info={info} />}
        </div>
        <div
          className={
            "radio-options" +
            (getFieldStatus() === false ? " disabled-radio" : "")
          }
        >
          {items.map((item) => {            
            return (
              <div className="radio-item" key={item.id}>
                <label className="text-field-label">
                  <input
                    type="radio"
                    value={item.value}
                    disabled={!getFieldStatus()}
                    checked={selected === item.value}
                    onChange={(event) => {
                      handleSelection(id, event.target.value);
                    }}
                  />
                  <span className="radio-checkmark"></span>
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
