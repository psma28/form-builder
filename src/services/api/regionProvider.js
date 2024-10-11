import { regionesMapper } from "../../mappings/custom/regionesMapper";
import { comunasMapper } from "../../mappings/custom/comunasMapper";

const regionURL = "https://rrhh.iie.cl/public/web_rrhh/sources/regiones.php";

export async function getRegiones() {
  const res = await fetch(regionURL);
  const data = await res.json();
  return regionesMapper(data);
}

const comunaURL =
  "https://rrhh.iie.cl/public/web_rrhh/sources/comunas.php?region_id=";

export async function getComunas(regionID) {
  const res = await fetch(comunaURL + regionID);
  const data = await res.json();
  return comunasMapper(data);
}
