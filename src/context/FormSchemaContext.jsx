import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { formBrowser } from "../utils/formBrowser";
import { NotFoundPage } from "../pages/NotFoundPage";
import { handlePayload } from "../services/EventPayloadHandler";
import { LoadingContext } from "./LoadingContext";
import { useEvents } from "../hooks/useEvents";
import { useComponents } from "../hooks/useComponents";
import { ModalContext } from "./ModalContext";

export const FormSchemaContext = createContext();

export function FormSchemaProvider({ children }) {
  const { formId } = useParams();
  const form = formBrowser(formId);
  const { setLoading } = useContext(LoadingContext);
  const { pushComponent, updateComponent, getComponent, getSchema } =
    useComponents();
  const { getEvents, collapseEvents, hasEvent, pushEvent } =
    useEvents(updateComponent);
  const { toggleModal, setModalContent } = useContext(ModalContext);

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

  const stageForm = () => {};

  const sendForm = () => {
    const schema = getSchema();
    const missingFields = [];
    const stagedSchema = new FormData();
    const monitorForm = [];
    for (const [key, props] of Object.entries(schema)) {
      if (
        props.component &&
        props.visible !== false &&
        (props.items === undefined || (props.items && props.items.length > 0))
      ) {
        //Verifies every field that has items and is visible
        if (props.value === "" || props.value.length === 0) {
          //Field must be completed
          console.log("Mising", key, props);
          missingFields.push("-" + props.label);
          if (props.component === "text") {
            updateComponent(key, { value: " " });
          }
          continue;
        }
        stagedSchema.append(key, props.value);
        monitorForm.push("fieldID: " + key + " value: " + props.value);
      }
    }
    if (missingFields.length > 0) {
      setModalContent({
        title: "Formulario incompleto",
        content: [
          "Complete todos los campos requeridos por favor: ",
          ...missingFields,
        ],
      });
      toggleModal();
      return;
    }
    console.log("Staged SCHEMA", stagedSchema);
    setModalContent({
      title: "Enviar Formulario",
      content: [
        "Estás a punto de subir una postulación, ESTA ACCIÓN ES IRREVERSIBLE: ",
        ...monitorForm,
      ],
    });
    toggleModal();
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
        stageForm,
        sendForm,
      }}
    >
      {children}
    </FormSchemaContext.Provider>
  );
}
