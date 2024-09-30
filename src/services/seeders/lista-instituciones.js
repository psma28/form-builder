import { institucionesMapper } from "../../mappings/custom/institucionesMapper";

const institucionURL = "https://rrhh.iie.cl/public/web_rrhh/sources/instituciones.php"

export async function getInstituciones() {
    const res = await fetch(institucionURL);
    const data = await res.json()
    return institucionesMapper(data)
    
  }