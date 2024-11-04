import { SEXO_REGISTRAL_URL } from "../../utils/URL";

export async function getListaSexos() {
  const res = await fetch(SEXO_REGISTRAL_URL);
  const data = await res.json();
  return data;
}
