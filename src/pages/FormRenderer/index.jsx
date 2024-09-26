import { useParams } from "react-router-dom";
import { formBrowser } from "../../utils/formBrowser";
import { NotFoundPage } from "../NotFoundPage";
import { LoadingProvider } from "../../context/LoadingContext";
import { FieldAccessProvider } from "../../context/FieldAccessContext";
import { FormHandlerProvider } from "../../context/FormHandlerContext";
import { Layout } from "../../layout";
import { RUTField } from "../../components/RUTField";
import { EventManagerProvider } from "../../context/EventManagerContext";
import { ComponentGenerator } from "./components/ComponentGenerator";
import { FormSchemaInit } from "../../utils/mappings/FormSchemaInit";
import { SumbmitButton } from "../../components/SubmitButton";

export function FormRenderer() {
  const { formId } = useParams();
  const form = formBrowser(formId);

  if (form === null || form === undefined) {
    return <NotFoundPage message="No se encontró el formulario" />;
  }

  return (
    <LoadingProvider>
      <FieldAccessProvider>
        <FormHandlerProvider>
          <EventManagerProvider>
            <FormSchemaInit schema={form["form-groups"]} />
            <Layout title={form.title} helpText={form["form-intro"]}>
              <RUTField />
              <ComponentGenerator schema={form["form-groups"]} />
            </Layout>

            <SumbmitButton />
          </EventManagerProvider>
        </FormHandlerProvider>
      </FieldAccessProvider>
    </LoadingProvider>
  );
}
