import "./index.css";
import { useContext } from "react";
import { FieldAccessContext } from "../../../../context/FieldAccessContext";
import { FormSchemaContext } from "../../../../context/FormSchemaContext";
import { SubmitIcon } from "../../../../assets/icons/SubmitIcon";

export const SumbmitButton = () => {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { sendForm } = useContext(FormSchemaContext);
  const visible = getFieldStatus();
  return (
    visible && (
      <div className="submit-section">
        <button
          className="submit-button font-encode"
          title="Subir formulario"
          onClick={() => sendForm()}
        >
          <SubmitIcon />
          <span>Enviar Postulación</span>
        </button>
      </div>
    )
  );
};
