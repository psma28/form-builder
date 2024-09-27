import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { formBrowser } from "../utils/formBrowser";
import { NotFoundPage } from "../pages/NotFoundPage";
import { handlePayload } from "../services/EventPayloadHandler";
import { LoadingContext } from "./LoadingContext";
import { useEvents } from "../hooks/useEvents";
import { useComponents } from "../hooks/useComponents";

export const FormSchemaContext = createContext();

export function FormSchemaProvider({ children }) {
  const { formId } = useParams();
  const form = formBrowser(formId);
  const { setLoading } = useContext(LoadingContext);
  const { pushComponent, updateComponent, getComponent } = useComponents();
  const { getEvents, collapseEvents, hasEvent, pushEvent } =
    useEvents(updateComponent);

  if (!form) return <NotFoundPage message="No se encontró el formulario" />;

  const eventHandler = async (actorId, value, events) => {
    collapseEvents(actorId);
    if (events.length === 0) return;
    for (const event of events) {
      const targetId = event.target;
      await handlePayload(value, event, setLoading, updateComponent);
      pushEvent(actorId, targetId, event.payload);
    }
  };

  const parseForm = (element) => {
    const componentName = element.component;
    if (componentName === "blank") return;
    if (
      componentName === "form-structure" ||
      componentName === "document-manager"
    ) {
      element.content.forEach(parseForm);
      return;
    }
    let value = "";
    if (componentName === "checkbox" || componentName === "checkandfill") {
      value = [];
    }
    element = { ...element, value };
    pushComponent(element);
  };

  form["form-groups"].forEach((group) => parseForm(group));

  return (
    <FormSchemaContext.Provider
      value={{
        form,
        pushComponent,
        updateComponent,
        collapseEvents,
        getComponent,
        eventHandler,
        getEvents,
        hasEvent,
      }}
    >
      {children}
    </FormSchemaContext.Provider>
  );
}
