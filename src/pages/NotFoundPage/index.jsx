import "./index.css";
import noResults from "../../assets/icons/no-results.svg"
export function NotFoundPage({message}){
    return (
        <article className="not-found-background">
            <div className="not-found-content">
                <div className="not-found-image">
                    <img src={noResults} alt="not-found" />
                </div>
                <span className="font-calibri">{message}</span>
            </div>
        </article>
    )
}