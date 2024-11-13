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
  
  const stageForm = (schema)=>{
    const missingFields = [];
    const stagedFields = [];
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
        //stagedFields.append(key, props.value);
        stagedFields.push({ key, value: props.value });
      }
    }
    return {missingFields, stagedFields};
  }

  const sendForm = async () => {
    const schema = getSchema();
    const {missingFields, stagedFields} = stageForm(schema);
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
    stagedFields.push({ key: "rut", value: getComponent("rut").value });
    setModalContent({
      title: "Enviar Formulario",
      content: [
        "Estás a punto de subir una postulación. Tus datos serán guardados/actualizados",
      ],
      action: {
        label: "Subir postulación",
        function: ()=>uploadAction(stagedFields),
      },
    });
    toggleModal();
  };

  const uploadAction = async(stagedFields)=>{
    setLoading(true)
    const formData = formMapper(stagedFields);
    formData.append('id_proyecto', form.id_proyecto)
    console.log(form)
    try {
      const res = await uploadForm(formData);
      
      if (res.success === false) {
        throw new Error(res.message);
      }
      setModalContent({
        title: "Postulación completada",
        content: ["Gracias por completar tu postulación."],
      }); 
      toggleModal();
    } catch (error) {
      setModalContent({
        title: "Error",
        content: [error.message],
      }); 
      toggleModal();
    } finally {
      setLoading(false);
    }
  } 
  
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
