import { RUT_URL } from "../../utils/URL";

export async function RUTVerification(rut, projectId, accessType) {
  let baseURL = RUT_URL;
  switch (accessType) {
    case "junji-docs":
      baseURL = baseURL + '-junji' 
      break;
    case "edd":
      baseURL = baseURL + '-edd' 
      break;
    default:
      break;
  }
  const URL = baseURL + `?rut=${rut}&id_proyecto=${projectId}`;
  const response = await fetch(URL);
  const status = response.status;
  let data = null;
  let message = null;

  try {
    data = await response.json();
    message = data?.message ?? null;
  } catch (err) {
    message = `Respuesta inválida del servidor (${err})`;
  }

  return {
    ok: response.ok,
    status,
    data: data?.data,
    message,
  };
}
