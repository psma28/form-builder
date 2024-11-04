import { DISCAPACIDAD_URL } from "../../utils/URL";

export async function getListaSituacionDiscapacidad() {
  const res = await fetch(DISCAPACIDAD_URL);
  const data = await res.json();
  return data;
}
