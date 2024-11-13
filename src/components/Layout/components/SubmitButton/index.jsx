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
      <button
        className="submit-bubble"
        title="Subir formulario"
        onClick={() => sendForm()}
      >
        {/*<SubmitIcon style="submit-icon" />*/}
      <h4>Postular</h4>
      </button>
    )
  );
};
