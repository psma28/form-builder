import { INSTITUCIONES_URL } from "../../utils/URL";

export async function getInstituciones() {
  const res = await fetch(INSTITUCIONES_URL);
  const data = await res.json();
  return data;
}
