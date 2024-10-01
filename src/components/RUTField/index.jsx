import "./index.css";
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { LoadingContext } from "../../context/LoadingContext";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { RUTFormatter } from "../../utils/RUTFormatter";
import { useRUT } from "./hooks/useRUT";
import { FormSchemaContext } from "../../context/FormSchemaContext";

export function RUTField() {
  //13.962.983-3
  const { setFieldAccess } = useContext(FieldAccessContext);
  const { setLoading } = useContext(LoadingContext);
  const { updateComponent } = useContext(FormSchemaContext);
  const { inputChangeHandler, verificateRUT, indicator, rutValue } = useRUT(
    setLoading,
    setFieldAccess,
    updateComponent
  );
  return (
    <div className="rut-container">
      <div className="rut-field">
        <span className="rut-label text-form-title">RUT</span>
        <SearchIcon action={verificateRUT} style="rut-search" />
        <input
          className="rut-input font-calibri"
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
        />
      </div>
      <div className="rut-indicator">
        <span className={"font-calibri " + indicator.color}>
          {indicator.message}
        </span>
      </div>
    </div>
  );
}
