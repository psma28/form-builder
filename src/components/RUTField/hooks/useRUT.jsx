import { useState } from "react";
import { RUTIndicators } from "../data/RUTIndicators";
import { validateRUT } from "../../../validators/RUTValidator";
import { getValue, turnToRutForm } from "../../../utils/RUTFormatter";
import { RUTVerification } from "../../../services/api/RUTVerification";
export function useRUT(
  setLoading,
  fieldHandler,
  updateComponent,
  getComponent,
  setModalContent,
  toggleModal,
  cleanForm,
  projectId,
  accessType, //Indica el tipo de acceso que tendrán los postulantes
  canCompleteMsg //Mensaje del modal si se puede completar
) {
  const [rutValue, setRutValue] = useState("");
  const [indicator, setIndicator] = useState(RUTIndicators.waiting);

  const handleIndicator = (status) => {
    setIndicator(status);
  };
  const inputChangeHandler = (value) => {
    setRutValue(getValue(value));
  };

  const checkRUT = () => {
    const auxRut = getComponent("rut");
    if (getComponent("rut")) {
      setModalContent({
        title: "Aviso importante",
        content: ["Al cambiar de RUN los campos sin guardar se eliminarán"],
        action: {
          label: "Aceptar",
          function: async () => {
            fieldHandler(false);
            cleanForm();
            await verificateRUT();
          },
        },
        close: () => inputChangeHandler(auxRut.value),
      });
      toggleModal();
      return;
    }
    verificateRUT();
  };

  const verificateRUT = async () => {
    //RUN INVALIDO
    if (!validateRUT(getValue(rutValue))) {
      handleIndicator(RUTIndicators.failed);
      fieldHandler(false);
      return;
    }
    setLoading(true);
    const response = await RUTVerification(
      turnToRutForm(rutValue),
      projectId,
      accessType
    );
    //console.log("respuesta", response);
    
    const data = response.data ?? {};
    const message = response?.message;

    //No está habilitado para subir forms
    if (data?.habilitado_form === false || !response.ok) {
       const lines = message ? message.split("\n") : [];
      setModalContent({
        title: "Aviso",
        content: [
          "No puede subir una postulación por el momento.",
          ...lines,
        ],
      });
      toggleModal();
      fieldHandler(false);
      handleIndicator(RUTIndicators.not_able);
      setLoading(false);
      return;
    }

    //No permite subir de nuevo
    if (data.modificado == true) {
      setModalContent({
        title: "Verificación RUN",
        content: [
          "El sistema ya cuenta con una postulación asociada al RUN ingresado. ",
        ],
      });
      toggleModal();
      fieldHandler(false);
      handleIndicator(RUTIndicators.already);
      setLoading(false);
      return;
    }
    setModalContent({
      title: "Aviso importante",
      content: [
        canCompleteMsg ||
          "Por favor ingrese NOMBRES Y APELLIDOS tal cual aparecen en su Cédula de Identidad.",
      ],
    });
    toggleModal();

    //RELLENAR FORM CON DATOS
    for (const [key, value] of Object.entries(data)) {
      if (!getComponent(key)) continue;
      if (value) updateComponent(key, { value: value });
    }
    setLoading(false);
    updateComponent("rut", { value: turnToRutForm(rutValue) });
    handleIndicator(RUTIndicators.verified);
    fieldHandler(true);
  };

  return { inputChangeHandler, checkRUT, verificateRUT, indicator, rutValue };
}
