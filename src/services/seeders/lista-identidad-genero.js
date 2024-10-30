export async function getListaIdentidadGenero() {
  const res = await fetch('https://devrrhh.iie.cl/rrhh_api/item/identidades-genero');
  const data = await res.json();
  return data;
}
