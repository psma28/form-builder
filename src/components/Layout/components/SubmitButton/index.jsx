import "./index.css";
import { useContext } from "react";
import { FieldAccessContext } from "../../../../context/FieldAccessContext";
import { FormSchemaContext } from "../../../../context/FormSchemaContext";

export const SumbmitButton = () => {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { sendForm } = useContext(FormSchemaContext);
  const visible = getFieldStatus();
  return (
    visible && (
      <div className="submit-section">
        <button
          onClick={() => sendForm()}
          className="submit-button font-calibri"
        >
          Enviar postulación
        </button>
      </div>
    )
  );
};
