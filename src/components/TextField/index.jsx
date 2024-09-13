import "./index.css";
import { useContext, useState } from "react";
import { InfoPopup } from "../InfoPin";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { dumbValidator } from "../../utils/validators/dumbValidator";
import { FormHandlerContext } from "../../context/FormHandlerContext";

export function TextField({
  id,
  label,
  info,
  props,
  validators = [dumbValidator],
  visible = true,
  events = [],
  eventHandler
}) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { updateForm } = useContext(FormHandlerContext);
  const [errors, setErrors] = useState([]);

  const handleInput = (content) => {
    if(eventHandler) eventHandler()
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
    if (validation) {
      updateForm(id, content);
    } else {
      updateForm(id, null);
    }
  };

  return (
    <div className="text-field-container">
      <div className="text-field-content">
        <div className="text-field-label-content">
          <span className="text-field-label">{label}</span>
          {info && <InfoPopup info={info} />}
        </div>
        <div
          className={
            "text-field-input text-field-label" +
            (getFieldStatus() === false ? " disabled-input" : "") +
            (errors?.length>0 ? " text-field-error" : "")+
            ({ ...props }.type === "tel" ? " telephone-input" : "")
          }
        >
          {{ ...props }.type === "tel" ? (
            <span className="text-field-label">+569</span>
          ) : (
            <></>
          )}
          <input
            type={{ ...props }.type}
            disabled={!getFieldStatus()}
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
  );
}
