import { useState } from "react";
import { RUTIndicators } from "../data/RUTIndicators";
import { validateRUT } from "../../../validators/RUTValidator";
import { getValue, RUTFormatter } from "../../../utils/RUTFormatter";
import { RUTVerification } from "../../../services/api/RUTVerification";
export function useRUT(
  setLoading,
  fieldHandler,
  updateComponent,
  getComponent,
  setModalContent,
  toggleModal,
  cleanForm
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
    console.log("checkeando rut", getComponent("run"));
    const auxRut = getComponent("run");
    if (getComponent("run")) {
      setModalContent({
        title: "Aviso importante",
        content: ["Al cambiar de RUT los campos sin guardar se eliminarán"],
        action: {
          label: "Aceptar",
          function: async () => {
            cleanForm();
            await verificateRUT();
          },
        },
        close: (()=>inputChangeHandler(auxRut.value))
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
    const data = await RUTVerification(RUTFormatter(rutValue));
    const entries = data[0] ?? [];
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
    updateComponent("run", { value: rutValue });
    handleIndicator(RUTIndicators.verified);
    fieldHandler(true);
  };

  return { inputChangeHandler, checkRUT, verificateRUT, indicator, rutValue };
}
