import "./index.css";

export function FormHeader({ title }) {
  return (
    <nav className="title-container">
      <a className="title-image" href="https://www.mineduc.cl" target="_blank">
        <img src="mineduc_web.svg" alt="Ministerio de educación" />
      </a>
      <span className="text-header">{title}</span>
    </nav>
  );
}
