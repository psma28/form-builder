import { useState } from "react";
import "./index.css";

export function InfoPopup({ info }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="info-icon"
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <span>i</span>
        {hovered && (
          <div className="field-info">
            <span className="text-field-label">{info}</span>
          </div>
        )}
      </div>
    </>
  );
}
