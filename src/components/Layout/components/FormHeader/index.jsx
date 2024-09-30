import "./index.css";

export function FormHeader({ title }) {
  return (
    <nav className="title-container">
      <span className="text-header">{title}</span>
    </nav>
  );
}
