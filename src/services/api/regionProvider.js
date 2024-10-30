import { regionesMapper } from "../../mappings/custom/regionesMapper";
import { comunasMapper } from "../../mappings/custom/comunasMapper";

const regionURL = "https://devrrhh.iie.cl/rrhh_api/item/regiones";

export async function getRegiones() {
  const res = await fetch(regionURL);
  const data = await res.json();  
  return data;
}

const comunaURL =
  "https://devrrhh.iie.cl/rrhh_api/item/comunas/";

export async function getComunas(regionID) {
  const res = await fetch(comunaURL + regionID);
  const data = await res.json();
  return data;
}
