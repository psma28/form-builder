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
        "Error al procesar la solicitud."
      );
    }
    return data;
  } catch (err) {
    let message = 'Error del servidor, inténtelo de nuevo mas tarde';
    if (!err.message) message = err.message;
    return { success: false, message: message};
  }
}
