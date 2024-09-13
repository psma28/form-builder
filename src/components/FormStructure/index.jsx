import "./index.css";

export function FormStructure({ title, indication = "", children }) {
  return (
    <div className="form-container" key={title}>
      <div className="form-title">
        <span className="text-form-title">{title}</span>
        {indication && <span className="text-field-label">{indication}</span>}
      </div>
      <div className="form-fields">{children}</div>
    </div>
  );
}
