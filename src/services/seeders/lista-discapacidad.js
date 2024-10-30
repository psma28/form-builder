export async function getListaSituacionDiscapacidad() {
  const res = await fetch('https://devrrhh.iie.cl/rrhh_api/item/situaciones-discapacidad');
  const data = await res.json();
  return data;
}
