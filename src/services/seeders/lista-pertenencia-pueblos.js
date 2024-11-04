import { PERTENENCIA_PUEBLOS_URL } from "../../utils/URL";

export async function getListaPertenenciaPueblos() {
  const res = await fetch(PERTENENCIA_PUEBLOS_URL);
  const data = await res.json();
  return data;
}
