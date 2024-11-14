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
  projectId
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
    if (!validateRUT(getValue(rutValue))) {
      handleIndicator(RUTIndicators.failed);
      fieldHandler(false);
      return;
    }
    setLoading(true);
    const data = await RUTVerification(turnToRutForm(rutValue), projectId);
    const entries = data.data ?? {};
    if (entries.modificado == true){
      setModalContent({
        title: "Verificación RUN",
        content: [
          "Nuestro sistema ya cuenta con una postulación asociada al RUN ingresado. ",
        ],
      });
      toggleModal();
      setLoading(false);
      return;
    }
    setModalContent({
      title: "Aviso importante",
      content: [
        "Por favor ingrese NOMBRES Y APELLIDOS tal cual aparecen en su Cédula de Identidad.",
      ],
    });
    toggleModal();
    for (const [key, value] of Object.entries(entries)) {
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
