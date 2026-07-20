import { useEffect } from "react";
import { checkInvitation } from "../../../services/api/InvitationVerification";
import { RUTVerification } from "../../../services/api/RUTVerification";
import { validateRUT } from "../../../validators/RUTValidator";
import { getValue, turnToRutForm } from "../../../utils/RUTFormatter";

export function useInvitation({
  token,
  projectId,
  accessType,
  canCompleteMsg,
  updateComponent,
  getComponent,
  setLoading,
  setFieldAccess,
  setModalContent,
  toggleModal,
  block,
}) {
  useEffect(() => {
    if (!token) {
      block("No encontramos una invitación válida para acceder a este formulario.");
      return;
    }
    validateInvitation();
  }, []);

  const validateInvitation = async () => {
    setLoading(true);
    try {
      const response = await checkInvitation(token);
      if (!response.ok) {
        block(
          response.message ||
            "No encontramos una invitación válida para acceder a este formulario."
        );
        return;
      }

      const rawRut = response.data?.rut;
      if (!rawRut) {
        block("La invitación no contiene un RUN válido.");
        return;
      }

      const extendedData={
        email: response.data?.correo,
        nombres: response.data?.nombres,
        apellido_paterno: response.data?.apellido_paterno,
        apellido_materno: response.data?.apellido_materno,
      }

      await verifyRUT(rawRut, extendedData);
    } finally {
      setLoading(false);
    }
  };

  const verifyRUT = async (rawRut, extendedData={}) => {
    const cleanRut = getValue("" + rawRut);
    if (!validateRUT(cleanRut)) {
      block("El RUN asociado a la invitación no es válido.");
      return;
    }

    const response = await RUTVerification(
      turnToRutForm(cleanRut),
      projectId,
      accessType
    );
    const data = response.data ?? extendedData;

    const message = response?.message;

    if (data?.habilitado_form === false || !response.ok) {
      const lines = message ? message.split("\n") : [];
      block(
        ["No puede subir una postulación por el momento.", ...lines].join(" ")
      );
      return;
    }

    if (data.modificado == true) {
      block(
        "El sistema ya cuenta con una postulación asociada al RUN ingresado."
      );
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

    for (const [key, value] of Object.entries(data)) {
      if (!getComponent(key)) continue;
      if (value) updateComponent(key, { value: value });
    }
    updateComponent("rut", { value: turnToRutForm(cleanRut) });
    setFieldAccess(true);
  };
}
