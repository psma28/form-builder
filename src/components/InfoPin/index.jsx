import { useState } from "react";
import "./index.css";

export function InfoPopup({ info }) {
  const [hovered, setHovered] = useState(false);

  // Función para parsear el texto
  const parseInfo = (text) => {
    const lines = text.split("\n");
    const listItems = lines.filter((line) => line.startsWith("--"));
    const otherText = lines.filter((line) => !line.startsWith("--"));

    return (
      <>
        {otherText.map((line, index) => (
          <p key={`text-${index}`}>{line}</p>
        ))}
        {listItems.length > 0 && (
          <ul>
            {listItems.map((line, index) => (
              <li key={`list-${index}`}>{line.slice(2)}</li>
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <div
      className="info-icon"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>i</span>
      {hovered && (
        <div className="field-info">
          <span className="font-roboto">{parseInfo(info)}</span>
        </div>
      )}
    </div>
  );
}
