import { IDENTIDADES_GENERO_URL } from "../../utils/URL";

export async function getListaIdentidadGenero() {
  const res = await fetch(IDENTIDADES_GENERO_URL);
  const data = await res.json();
  return data;
}
