import "./index.css";
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { LoadingContext } from "../../context/LoadingContext";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { RUTFormatter } from "../../utils/RUTFormatter";
import { useRUT } from "./hooks/useRUT";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import { ModalContext } from "../../context/ModalContext";

export function RUTField() {
  const { setFieldAccess } = useContext(FieldAccessContext);
  const { setLoading } = useContext(LoadingContext);
  const { updateComponent, getComponent, cleanForm, form } =
    useContext(FormSchemaContext);
  const { setModalContent, toggleModal } = useContext(ModalContext);
  const { inputChangeHandler, checkRUT, indicator, rutValue } = useRUT(
    setLoading,
    setFieldAccess,
    updateComponent,
    getComponent,
    setModalContent,
    toggleModal,
    cleanForm,
    form.id_proyecto
  );
  return (
    <div className="rut-card">
      <div className="rut-field">
        <div className="rut-label">
          <span className="text-field-label">RUN</span>
        </div>
        <div className="rut-input">
          <input
            className=" font-roboto-rut"
            type="text"
            maxLength={12}
            placeholder="xx.xxx.xxx-x"
            value={RUTFormatter(rutValue)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                checkRUT();
              }
            }}
            onChange={(e) => inputChangeHandler(e.target.value)}
          />
          <SearchIcon action={checkRUT} style="rut-search" />
        </div>
      </div>
      <div className="rut-indicator">
        <span className={"font-roboto " + indicator.color}>
          {indicator.message}
        </span>
      </div>      
    </div>
  );
}
