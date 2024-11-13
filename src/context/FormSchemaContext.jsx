import { createContext, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formBrowser } from "../utils/formBrowser";
import { NotFoundPage } from "../pages/NotFoundPage";
import { handlePayload } from "../services/EventPayloadHandler";
import { LoadingContext } from "./LoadingContext";
import { useEvents } from "../hooks/useEvents";
import { useComponents } from "../hooks/useComponents";
import { ModalContext } from "./ModalContext";
import { uploadForm } from "../services/api/uploadForm";
import { formMapper } from "../mappings/form/FormMapper";

export const FormSchemaContext = createContext();

export function FormSchemaProvider({ children }) {
  const { formId } = useParams();
  const form = formBrowser(formId);
  const title = form?.title;
  const { setLoading } = useContext(LoadingContext);
  const { pushComponent, updateComponent, getComponent, getSchema, cleanForm } =
    useComponents();
  const { getEvents, collapseEvents, hasEvent, pushEvent } =
    useEvents(updateComponent);
  const { toggleModal, setModalContent } = useContext(ModalContext);

  useEffect(()=>{
    if(form) document.title = title;
  },[])
  
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
  
  const sendForm = async () => {
    const schema = getSchema();
    const missingFields = [];
    const stagedSchema = [];
    const monitorForm = []; //MONITORIZAR LA SALIDA EN LOG
    
    //Verificar todos los campos del formulario
    for (const [key, props] of Object.entries(schema)) {
      if (
        props.component &&
        props.visible !== false &&
        props.required !== false &&
        (props.items === undefined || (props.items && props.items.length > 0))
      ) {
        //Verifies every field that has items and is visible
        if (props.value === "" || props.value.length === 0) {
          //Field must be completed
          missingFields.push("-" + props.label);
          if (props.component === "text") {
            updateComponent(key, { value: " " });
          }
          continue;
        }
        //stagedSchema.append(key, props.value);
        stagedSchema.push({ key, value: props.value });
        monitorForm.push(key + ": " + props.value);
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
    stagedSchema.push({ key: "rut", value: getComponent("rut").value });
    monitorForm.push("rut: " + getComponent("rut").value);
    setModalContent({
      title: "Enviar Formulario",
      content: [
        "Estás a punto de subir una postulación. Tus datos serán guardados/actualizados",
      ],
      action: {
        label: "Subir postulación",
        function: async () => {
          setLoading(true)
          const formData = formMapper(stagedSchema);
          formData.append('id_proyecto', form.id_proyecto)
          console.log(form)
          await uploadForm(formData);
          
          window.alert("Postulación completada");
          setLoading(false);
        },
      },
    });
    toggleModal();
  };
  
  const parseForm = (element) => {
    const componentName = element.component;
    if (componentName === "blank") return;
    if (componentName === "form-structure") {
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
  
  form.schema.forEach((group) => parseForm(group));
  
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
        sendForm,
        cleanForm,
        title
      }}
    >
      {children}
    </FormSchemaContext.Provider>
  );
}
