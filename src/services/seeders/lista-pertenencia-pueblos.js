export async function getListaPertenenciaPueblos() {
  const res = await fetch('https://devrrhh.iie.cl/rrhh_api/item/pertenencia-pueblos');
  const data = await res.json();
  return data;
}
