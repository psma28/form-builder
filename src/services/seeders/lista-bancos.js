import { bancosMapper } from "../../mappings/custom/bancosMapper";

const bancoURL = "https://devrrhh.iie.cl/rrhh_api/item/bancos";

export async function getBancos() {
  const res = await fetch(bancoURL);
  const data = await res.json();
  return data;
}
