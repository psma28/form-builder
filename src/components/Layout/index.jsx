import "./index.css";
import { useContext } from "react";
import { LoadingContext } from "../../context/LoadingContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { FormHeader } from "./components/FormHeader";
import { FormHelpText } from "./components/FormHelpText";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import { SumbmitButton } from "./components/SubmitButton";
import { CustomModal } from "./components/CustomModal";
import { IndicationBlock } from "./components/IndicationBlock";
import { FormBlockContext } from "../../context/FormBlockContext";
import { NotFoundPage } from "../../pages/NotFoundPage";

export function Layout({ children }) {
  const { isLoading } = useContext(LoadingContext);
  const { form, title } = useContext(FormSchemaContext);
  const { blocked, blockMessage } = useContext(FormBlockContext);

  return (
    <div className="layout-container">
      {isLoading === true ? <LoadingScreen /> : <></>}
      <FormHeader title={title} />
      <div className="container-fluid">
        {blocked ? (
          <NotFoundPage message={blockMessage} />
        ) : (
          <>
            <FormHelpText text={form.intro} />
            <IndicationBlock text={form.indication} />
            {children}
          </>
        )}
      </div>
      {!blocked && <SumbmitButton />}
      <CustomModal />
    </div>
  );
}
