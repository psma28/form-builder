import "./index.css";

export function FormHelpText({ text }) {
  return (
    text && (
      <div className="help-container">
        {text.split("\n").map((line, index) => {
          return (
            <span className="text-help" key={index}>
              {line}
            </span>
          );
        })}
      </div>
    )
  );
}
