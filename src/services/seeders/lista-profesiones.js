import { PROFESIONES_EDD_URL, PROFESIONES_URL } from "../../utils/URL";

export async function getProfesiones() {
  const res = await fetch(PROFESIONES_URL);
  const data = await res.json();
  return data;
}

export async function getProfesionesEDD() {
  const res = await fetch(PROFESIONES_EDD_URL);
  const data = await res.json();
  return data;
}
