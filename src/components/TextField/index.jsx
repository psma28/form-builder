import "./index.css";
import { useContext } from "react";
import { InfoPopup } from "../InfoPin";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { dumbValidator } from "../../utils/validators/dumbValidator";
import { FormHandlerContext } from "../../context/FormHandlerContext";
import { EventManagerContext } from "../../context/EventManagerContext";
import { useErrors } from "./hooks/useErrors";

export function TextField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { updateForm, getFieldValue } = useContext(FormHandlerContext);
  const { getComponent, eventHandler } = useContext(EventManagerContext);
  const { errors, setErrors } = useErrors();

  if (!getComponent(id)) return <></>;

  const {
    label,
    extend = false,
    info,
    validators = [dumbValidator],
    visible = true,
    events = [],
    ...props
  } = getComponent(id);

  const contentUpdater = (content) => {
    updateForm(id, content);
  };

  const handleInput = (content) => {
    if (eventHandler) eventHandler(id, content, events);
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
    setErrors(messages);
    if (!validation) updateForm(id, "");
  };

  return (
    visible && (
      <div className={"text-field-container" + 
        (extend === false ? " half-field": " full-field")
      }>
        <div className="text-field-content">
          <div className="text-field-label-content">
            <span className="text-field-label">{label}</span>
            {info && <InfoPopup info={info} />}
          </div>
          <div
            className={
              "text-field-input text-field-label" +
              (getFieldStatus() === false ? " disabled-input" : "") +
              (errors?.length > 0 ? " text-field-error" : "") +
              ({ ...props }.type === "tel" ? " telephone-input" : "")
            }
          >
            {{ ...props }.type === "tel" ? (
              <span className="text-field-label">+569</span>
            ) : (
              <></>
            )}
            <input
              id={id}
              type={{ ...props }.type}
              disabled={!getFieldStatus()}
              value={getFieldValue(id)}
              onChange={(e) => {
                contentUpdater(e.target.value);
              }}
              maxLength={{ ...props }.type === "tel" ? "8" : "30"}
              onBlur={(e) => handleInput(e.target.value)}
            />
          </div>
        </div>
        <div className="text-field-messages font-calibri">
          <ul>
            {errors &&
              errors.map((error) => {
                return <li key={error}>{error}</li>;
              })}
          </ul>
        </div>
      </div>
    )
  );
}
