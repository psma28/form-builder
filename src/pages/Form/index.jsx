import { FormSchemaContext } from "../../context/FormSchemaContext";
import { Layout } from "../../components/Layout";
import { RUTField } from "../../components/RUTField";
import { RenderComponents } from "./utils/RenderComponents";
import { useContext } from "react";

export function Form() {
  const { form } = useContext(FormSchemaContext);
  return (
    <Layout>
      <RUTField />
      {RenderComponents(form.schema)}
      <input type="hidden" id="_token" value="{{ csrf_token() }}"></input>
    </Layout>
  );
}
