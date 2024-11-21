import { useContext } from "react";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import "./index.css";

export function AlertText({ id }) {
  const { getComponent } = useContext(FormSchemaContext);
  const { text } = getComponent(id);
  return (
    <div className="alert-text-container full-field font-roboto">
      {text.split("\n").map((element, index) => (
        <span key={index}>{element}</span>
      ))}
    </div>
  );
}
