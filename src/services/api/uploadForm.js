export async function uploadForm(form) {
  try {
    const res = await fetch(
      "https://devrrhh.iie.cl/rrhh_api/form/subir-postulacion",
      {
        method: "POST",
        body: form,
        mode: "cors",
        cache: "no-cache",
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        "Error del servidor, intentelo de nuevo mas tarde"
      );
    }
    console.log("Respuesta subida", data);
    return data;
  } catch (err) {
    console.error("Error en la subida del formulario:", err);
    return { success: false, message: err.message };
  }
}
