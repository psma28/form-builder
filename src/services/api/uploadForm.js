export async function uploadForm(form, outputType) {
  let BASE_URL = "https://devrrhh.iie.cl/rrhh_api/form";
  let url = BASE_URL;
  switch (outputType) {
    case "junji-docs":
      url += "/subir-documento-junji";
      break;
    default:
      url += "/subir-postulacion";
      break;
  }
    
  try {
    const res = await fetch(url, {
      method: "POST",
      body: form,
      mode: "cors",
      cache: "no-cache",
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Error al procesar la solicitud.");
    }
    return data;
  } catch (err) {
    let message = "Error del servidor, inténtelo de nuevo mas tarde";
    if (!err.message) message = err.message;
    return { success: false, message: message };
  }
}
