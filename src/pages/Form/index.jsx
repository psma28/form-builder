import { FieldAccessProvider } from "../../context/FieldAccessContext";
import { FormSchemaContext } from "../../context/FormSchemaContext";
import { Layout } from "../../components/Layout";
import { RUTField } from "../../components/RUTField";
import { RenderComponents } from "./utils/RenderComponents";
import { useContext } from "react";

export function Form() {
  const { form } = useContext(FormSchemaContext);
  return (
    <FieldAccessProvider>
      <Layout>
        <RUTField />
        {RenderComponents(form["form-groups"])}
      </Layout>
    </FieldAccessProvider>
  );
}
