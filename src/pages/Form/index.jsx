import { FormSchemaContext } from "../../context/FormSchemaContext";
import { Layout } from "../../components/Layout";
import { RUTField } from "../../components/RUTField";
import { InvitationGate } from "../../components/InvitationGate";
import { RenderComponents } from "./utils/RenderComponents";
import { useContext } from "react";

export function Form() {
  const { form } = useContext(FormSchemaContext);
  return (
    <Layout>
      {form.invitation ? <InvitationGate /> : <RUTField />}
      {RenderComponents(form.schema)}
      <input type="hidden" id="_token" value="{{ csrf_token() }}"></input>
    </Layout>
  );
}
