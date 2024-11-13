import { NACIONALIDAD_URL } from "../../utils/URL";

export async function getNacionalidades() {
  const res = await fetch(NACIONALIDAD_URL);
  const data = await res.json();
  return data;
}
