import { BANK_URL } from "../../utils/URL";

export async function getBancos() {
  const res = await fetch(BANK_URL);
  const data = await res.json();
  return data;
}
