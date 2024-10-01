import "./index.css";
import { useContext, useEffect } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import { useRadio } from "./hooks/useRadio";
import { InfoPopup } from "../InfoPin";
import { LoadingContext } from "../../context/LoadingContext";

export function RadioButtonsField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { setLoading } = useContext(LoadingContext);
  const { getComponent, updateComponent, eventHandler } =
    useContext(FormSchemaContext);
  let {
    label,
    visible = true,
    items,
    events = [],
    info,
    extend = false,
    value,
  } = getComponent(id);

  const { selected, handleSelection, clearSelection, list, setList } = useRadio(
    id,
    value,
    items,
    events,
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
  useEffect(() => {
    if (Array.isArray(list)) {
      setLoading(false);
    }
  }, [list]);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    visible &&
    Array.isArray(list) &&
    list.length > 0 && (
      <div
        className={
          "radio-container " + (extend === false ? "half-field" : "full-field")
        }
      >
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
          {list.map((item) => {
            return (
              <div className="radio-item" key={item.id}>
                <label className="text-field-label">
                  <input
                    id={item.id}
                    type="radio"
                    value={item.value}
                    disabled={!getFieldStatus()}
                    checked={selected === item.value}
                    onChange={(event) => {
                      handleSelection(event.target.value);
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
