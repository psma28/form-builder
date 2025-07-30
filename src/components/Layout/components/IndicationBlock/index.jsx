import "./index.css";

export function IndicationBlock({ text }) {
  const parts = text?.split("$");

  return (
    text && (
      <div className="indication-block-container">
        <span className="font-roboto">
          {parts.map((part, index) =>
            index % 2 !== 0 ? <b key={index}>{part}</b> : part
          )}
        </span>
      </div>
    )
  );
}
