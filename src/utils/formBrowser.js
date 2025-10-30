// utils/formBrowser.js
import { forms } from "../data/forms.json";

export async function formBrowser(id) {
  const localForm = forms.find((form) => "" + form.id === "" + id);
  if (localForm) return localForm;

  try {
    const response = await fetch(
      `https://devrrhh.iie.cl/rrhh_api/form/formularios/${id}/esquema`
    );

    if (!response.ok) throw new Error("Error al obtener el formulario remoto");
    const json = await response.json();

    const remoteForm = json?.data?.estructura;
    if (!remoteForm) throw new Error("El formulario no tiene estructura válida");

    return remoteForm;
  } catch (error) {
    console.error("Error al cargar formulario:", error);
    return null;
  }
}
