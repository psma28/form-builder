export async function getTiposCuenta() {
  const res = await fetch('https://devrrhh.iie.cl/rrhh_api/item/tipos-cuenta-banco');
  const data = await res.json();
  return data;
}
