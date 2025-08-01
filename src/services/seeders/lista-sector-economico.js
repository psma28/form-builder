import { SECTOR_ECONOMICO_EDD_URL } from "../../utils/URL";

export async function getSectorEconomicoEDD() {
  const res = await fetch(SECTOR_ECONOMICO_EDD_URL);
    const data = await res.json();
    return data;
}