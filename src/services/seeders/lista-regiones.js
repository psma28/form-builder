import { REGION_URL } from "../../utils/URL";

export async function getRegiones() {
  const res = await fetch(REGION_URL);
  const data = await res.json();
  return data;
}
