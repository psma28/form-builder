import { COMUNA_URL } from "../../utils/URL";

export async function getComunas(regionID) {
    const res = await fetch(COMUNA_URL + regionID);
    const data = await res.json();
    return data;
  }
  