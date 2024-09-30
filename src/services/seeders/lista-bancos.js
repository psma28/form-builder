import { bancosMapper } from "../../mappings/custom/bancosMapper";

const bancoURL = "https://rrhh.iie.cl/public/web_rrhh/sources/bancos.php";

export async function getBancos() {
  const res = await fetch(bancoURL);
  const data = await res.json();
  return bancosMapper(data);
}
