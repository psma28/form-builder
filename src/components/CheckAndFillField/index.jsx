import { useContext, useEffect } from "react";
import "./index.css";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { EventManagerContext } from "../../context/EventManagerContext";
import { FormHandlerContext } from "../../context/FormHandlerContext";
import { InfoPopup } from "../InfoPin";
import { useCAF } from "./hooks/useCAF";
import { useCAFErrors } from "./hooks/useCAFErrors";

export function CheckAndFillField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { getComponent, eventHandler, collapseEvents } =
    useContext(EventManagerContext);
  const { updateForm, getFieldValue } = useContext(FormHandlerContext);
  const value = getFieldValue(id);
  const { getFieldErrors, setFieldErrors } = useCAFErrors();

  const { handleSelection, checkItem, clearSelection, handleFill, attachFill, getFill } =
    useCAF(value, updateForm, collapseEvents, getComponent, eventHandler, id);

  useEffect(() => {
    if (!value) clearSelection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  if (!getComponent(id)) return <></>;

  const {
    label,
    info,
    validators = [],
    visible = true,
    items = [],
    ...props
  } = getComponent(id);

  const handleText = (fieldId, content) => {
    //if (eventHandler) eventHandler(id, content, events);
    let validation = true;
    const messages = [];
    validators.map((validator) => {
      const validationResult = validator(content);
      if (!validationResult.valid) {
        validation = false;
        messages.push(validationResult.message);
      }
      return validator;
    });
    setFieldErrors(fieldId, messages);
    if (!validation) handleFill(fieldId, "");
    attachFill(fieldId)
  };

  return (
    visible &&
    Array.isArray(items) &&
    items.length > 0 && (
      <div className="caf-container">
        <div className="caf-label">
          <span className="text-field-label">{label}</span>
          {info && <InfoPopup info={info} />}
        </div>
        <div
          className={
            "caf-options" + (getFieldStatus() === false ? " disabled-caf" : "")
          }
        >
          {items.map((item) => {
            const errors = getFieldErrors(item.id);
            return (
              <div className="caf-option" key={item.id}>
                <div className="caf-checkfield">
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
                    <span className="caf-checkmark"></span>
                    <span>{item.label}</span>
                  </label>
                </div>

                <div className="caf-textfield">
                  <div
                    className={
                      "caf-textfield-input text-field-label" +
                      (!checkItem(item) ? " disabled-caf-text" : "") +
                      (errors?.length > 0 ? " caf-text-error" : "") +
                      ({ ...props }.type === "tel" ? " caf-telephone" : "")
                    }
                  >
                    {{ ...props }.type === "tel" ? (
                      <span className="text-field-label">+569</span>
                    ) : (
                      <></>
                    )}
                    <input
                      id={item.id}
                      type={{ ...props }.type}
                      disabled={!checkItem(item)}
                      value={getFill(item.value)}
                      onChange={(e) => {
                        handleFill(item.value, e.target.value);
                      }}
                      maxLength={{ ...props }.type === "tel" ? "8" : "30"}
                      onBlur={(e) => handleText(item.value, e.target.value)}
                    />
                  </div>
                  {errors.length > 0 && (
                    <div className="caf-textfield-messages font-calibri">
                      <ul className="caf-error-element">
                        {errors.map((error) => {
                          return <li key={error}>{error}</li>;
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
