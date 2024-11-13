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
  //13.962.983-3
  const { setFieldAccess } = useContext(FieldAccessContext);
  const { setLoading } = useContext(LoadingContext);
  const { updateComponent, getComponent, cleanForm } = useContext(FormSchemaContext);
  const { setModalContent, toggleModal } = useContext(ModalContext);
  const { inputChangeHandler, checkRUT, indicator, rutValue } =
    useRUT(
      setLoading,
      setFieldAccess,
      updateComponent,
      getComponent,
      setModalContent,
      toggleModal,
      cleanForm
    );
  return (
    <div className="rut-container">
      <div className="rut-field">
        <span className="rut-label text-form-title">RUN</span>
        <SearchIcon action={checkRUT} style="rut-search" />
        <input
          className="rut-input font-calibri-rut"
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
      </div>
      <div className="rut-indicator">
        <span className={"font-calibri " + indicator.color}>
          {indicator.message}
        </span>
      </div>
    </div>
  );
}
