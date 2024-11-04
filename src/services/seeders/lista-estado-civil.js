import { ESTADOS_CIVILES_URL } from "../../utils/URL";

export async function getListaEstadosCiviles() {
  const res = await fetch(ESTADOS_CIVILES_URL);
  const data = await res.json();
  return data;
}
