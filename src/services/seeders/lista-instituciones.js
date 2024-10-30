import { institucionesMapper } from "../../mappings/custom/institucionesMapper";

const institucionURL =
  "https://devrrhh.iie.cl/rrhh_api/item/instituciones";

export async function getInstituciones() {
  const res = await fetch(institucionURL);
  const data = await res.json();
  return data;
}
