import { TIPO_CUENTA_URL } from "../../utils/URL";

export async function getTiposCuenta() {
  const res = await fetch(TIPO_CUENTA_URL);
  const data = await res.json();
  return data;
}
