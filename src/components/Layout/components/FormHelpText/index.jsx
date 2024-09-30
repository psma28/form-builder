import "./index.css";

export function FormHelpText({ text }) {
  const content = text.split("\n");
  return (
    <div className="help-container">
      {content.map((line, index) => {
        return (
          <span className="text-help" key={index}>
            {line}
          </span>
        );
      })}
    </div>
  );
}
