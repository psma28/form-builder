import { useParams } from "react-router-dom";
import { formBrowser } from "../../utils/formBrowser";
import { NotFoundPage } from "../NotFoundPage";
import { LoadingProvider } from "../../context/LoadingContext";
import { FieldAccessProvider } from "../../context/FieldAccessContext";
import { FormHandlerProvider } from "../../context/FormHandlerContext";
import { Layout } from "../../layout";
import { RUTField } from "../../components/RUTField";
import { FormStructure } from "../../components/FormStructure"
import { ComponentGenerator } from "./utils/ComponentGenerator";

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
          <Layout title={form.title} helpText={form["form-intro"]}>
            <RUTField />
            {form["form-groups"].map((structure) => {
              return (
                <FormStructure
                  key={structure.id}
                  title={structure.label}
                  indication={structure.indication}
                >
                  {ComponentGenerator(structure)}
                </FormStructure>
              );
            })}
          </Layout>
        </FormHandlerProvider>
      </FieldAccessProvider>
    </LoadingProvider>
  );
}
