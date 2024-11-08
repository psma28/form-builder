import { CARGOS_ENDFID_URL } from "../../utils/URL";

export async function getListaCargosEndfid2024() {
  const res = await fetch(CARGOS_ENDFID_URL);
  const data = await res.json();
  return data;
}