import { RUT_URL } from "../../utils/URL";

export async function RUTVerification(rut, projectId) {
  const url = RUT_URL + `?rut=${rut}&id_proyecto=${projectId}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}
