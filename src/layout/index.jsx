import "./index.css";
import { FormHeader } from "./components/FormHeader";
import { FormHelpText } from "./components/FormHelpText";
import { LoadingScreen } from "./components/LoadScreen";
import { LoadingContext } from "../context/LoadingContext";
import { useContext } from "react";

export function Layout({ title, helpText, children }) {
  const { isLoading } = useContext(LoadingContext);

  return (
    <div className="layout-container">
      {isLoading === true ? <LoadingScreen /> : <></>}
      <FormHeader title={title} />
      <div className="container-fluid">
        <FormHelpText text={helpText}/>
        {children}
        </div>
    </div>
  );
}
