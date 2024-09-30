import "./index.css";
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { RUTFormatter } from "../../utils/RUTFormatter";
import { useRUTField } from "./hook/useRUTField.jsx";
import { SearchIcon } from "../../assets/icons/SearchIcon.jsx";
import { FormHandlerContext } from "../../context/FormHandlerContext.jsx";
import { LoadingContext } from "../../context/LoadingContext.jsx";

export function RUTField() {
  const { setFieldAccess } = useContext(FieldAccessContext);
  const { updateForm, attachForm } = useContext(FormHandlerContext)
  const { setLoading } = useContext(LoadingContext);
  const { inputChangeHandler, verificateRUT, indicator, rutValue } =
    useRUTField(setFieldAccess, updateForm, attachForm, setLoading);
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
