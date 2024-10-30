export async function getListaEstadosCiviles() {
  const res = await fetch('https://devrrhh.iie.cl/rrhh_api/item/estados-civiles');
  const data = await res.json();
  return data;
}
