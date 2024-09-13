import "./index.css";
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { RUTFormatter } from "../../utils/RUTFormatter";
import { useRUTField } from "./hook/useRUTField.jsx";

export const RUTField = () => {
  const { setFieldAccess } = useContext(FieldAccessContext);
  const { inputChangeHandler, verificateRUT, indicator, rutValue } =
    useRUTField(setFieldAccess);

  return (
    <div className="rut-field">
      <div className="rut-label">
        <span className="text-form-title">RUT</span>
      </div>
      <div className="rut-container">
        <div className="rut-input">
          <input
            type="text"
            maxLength={12}
            placeholder="xx.xxx.xxx-x"
            value={RUTFormatter(rutValue)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                verificateRUT();
              }
            }}
            onChange={(e) => inputChangeHandler(e.target.value)}
            onBlur={() => verificateRUT()}
          />
        </div>
        <div className="rut-indicator">
          <span className={"font-calibri " + indicator.color}>
            {indicator.message}
          </span>
        </div>
      </div>
    </div>
  );
};
