import './index.css'
import { useContext } from "react";
import { LoadingContext } from "../../context/LoadingContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { FormHeader } from "./components/FormHeader";
import { FormHelpText } from "./components/FormHelpText";
import { FormSchemaContext } from '../../context/FormSchemaContext';

export function Layout({ children }) {
    const { isLoading } = useContext(LoadingContext);
    const { form } = useContext(FormSchemaContext);

    return (
      <div className="layout-container">
        {isLoading === true ? <LoadingScreen /> : <></>}
        <FormHeader title={form["form-title"]} />
        <div className="container-fluid">
          <FormHelpText text={form["form-intro"]} />
          {children}
        </div>
      </div>
    );
  }
  