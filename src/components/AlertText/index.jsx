import { useContext } from "react";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import "./index.css";

export function AlertText({ id }) {
  const { getComponent } = useContext(FormSchemaContext);
  const { text } = getComponent(id);

  const renderLineWithBold = (line) => {
    const parts = line.split(/\\b(.+?)\\b/);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <b key={index}>{part}</b>;
      }
      return part;
    });
  };
  
  return (
    <div className="alert-text-container full-field font-roboto">
      {text.split("\n").map((line, index) => (
        <div key={index} style={{ whiteSpace: 'pre-wrap' }}>
          {renderLineWithBold(line)}
        </div>
      ))}
    </div>
  );
}
