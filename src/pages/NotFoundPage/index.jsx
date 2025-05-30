import { NoResultsIcon } from "../../assets/icons/NoResultsIcon";
import "./index.css";
export function NotFoundPage({ message }) {
  return (
    <article className="not-found-background">
      <div className="not-found-content">
        <NoResultsIcon style="not-found-image" />
        <span className="text-header">{message}</span>
      </div>
    </article>
  );
}
