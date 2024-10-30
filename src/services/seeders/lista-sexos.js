export async function getListaSexos() {
  const res = await fetch('https://devrrhh.iie.cl/rrhh_api/item/sexos-registrales');
  const data = await res.json();
  return data;
}
