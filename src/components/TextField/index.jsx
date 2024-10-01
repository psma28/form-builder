import "./index.css";
import { useContext, useEffect, useState } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import { useErrors } from "./hooks/useErrors";
import { InfoPopup } from "../InfoPin";
import { validatorMapper } from "../../mappings/validatorMapper";

export function TextField({ id }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { getComponent, updateComponent, eventHandler } =
    useContext(FormSchemaContext);
  const { errors, setErrors } = useErrors();
  const {
    label,
    extend = false,
    info,
    value,
    validators = [],
    visible = true,
    events = [],
    ...props
  } = getComponent(id);
  const [content, setContent] = useState(value);
  useEffect(() => {
    if (value !== content) {
      setContent(value);
      handleInput(value);
    }
  }, [value]);

  const handleInput = (input) => {
    let validation = true;
    const messages = [];
    const mappedValidators = validatorMapper(validators);
    mappedValidators.forEach((func) => {
      const validationResult = func(input);
      if (!validationResult.valid) {
        validation = false;
        messages.push(validationResult.message);
      }
    });
    setErrors(messages);
    if (!validation) {
      //updateForm(id, "")
      //updateComponent(id, { value: "" })
      setContent("");
      updateComponent(id, { value: "" });
      return;
    }
    updateComponent(id, { value: input });
    eventHandler(id, input, events);
  };
  return (
    visible && (
      <div
        className={
          "text-field-container" +
          (extend === false ? " half-field" : " full-field")
        }
      >
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
              value={content}
              maxLength={{ ...props }.type === "tel" ? "8" : "30"}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              onBlur={() => handleInput(content)}
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
