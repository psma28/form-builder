import "./index.css";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { LoadingContext } from "../../context/LoadingContext";
import { useContext, useEffect } from "react";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import { useCAFErrors } from "./hooks/useCAFErrors";
import { useCAF } from "./hooks/useCAF";
import { InfoPopup } from "../InfoPin";
import { validatorMapper } from "../../mappings/validatorMapper";

export function CheckAndFillField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { setLoading } = useContext(LoadingContext);
  const { getFieldErrors, setFieldErrors } = useCAFErrors();

  const { getComponent, updateComponent, eventHandler, collapseEvents } =
    useContext(FormSchemaContext);

  const {
    visible = true,
    extend = false,
    label,
    value,
    info,
    items,
    validators = [],
    events,
    ...props
  } = getComponent(id);
  const {
    isChecked,
    handleSelection,
    clearSelection,
    handleFill,
    attachFill,
    getCheckFill,
    list,
    setList,
  } = useCAF(
    id,
    value,
    items,
    events,
    updateComponent,
    eventHandler,
    collapseEvents,
    setLoading
  );
  useEffect(() => {
    if (!value) clearSelection();
  }, [value]);

  useEffect(() => {
    if (setList) setList(items);
  }, [items]);

  const handleText = (fieldId, content) => {
    //if (eventHandler) eventHandler(id, content, events);
    let validation = true;
    const messages = [];
    const mappedValidators = validatorMapper(validators);
    mappedValidators.map((validator) => {
      const validationResult = validator(content);
      if (!validationResult.valid) {
        validation = false;
        messages.push(validationResult.message);
      }
      return validator;
    });
    setFieldErrors(fieldId, messages);
    if (!validation) {
      handleFill(fieldId, content);
      return;
    }
    attachFill(fieldId);
  };

  return (
    visible &&
    Array.isArray(list) &&
    list.length > 0 && (
      <div
        className={
          "caf-container " + (extend === false ? "half-field" : "full-field")
        }
      >
        <div className="caf-label">
          <span className="text-field-label">{label}</span>
          {info && <InfoPopup info={info} />}
        </div>
        <div
          className={
            "caf-options" + (getFieldStatus() === false ? " disabled-caf" : "")
          }
        >
          {list.map((item) => {
            const errors = getFieldErrors(item.id);
            return (
              <div className="caf-option" key={item.id}>
                <div className="caf-checkfield">
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
                    <span className="caf-checkmark"></span>
                    <span>{item.label}</span>
                  </label>
                </div>

                <div className="caf-textfield">
                  <div
                    className={
                      "caf-textfield-input text-field-label" +
                      (!isChecked(item) ? " disabled-caf-text" : "") +
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
                      disabled={!isChecked(item)}
                      value={getCheckFill(item.value)}
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
