import { NIVEL_ESTUDIOS_URL } from "../../utils/URL";

export async function getNivelEstudios() {
  const res = await fetch(NIVEL_ESTUDIOS_URL);
  const data = await res.json();
  return data;
}
