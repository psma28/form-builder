import { ASIGNATURAS_EDD_URL, SUBAREAS_EDD_URL } from "../../utils/URL";


export async function getAsignaturasEDD() {
  const res = await fetch(ASIGNATURAS_EDD_URL);
    const data = await res.json();
    return data;
}

export async function getSubareasEDD(asignaturaId) {
  const res = await fetch(SUBAREAS_EDD_URL + asignaturaId);
    const data = await res.json();
    return data;
}
