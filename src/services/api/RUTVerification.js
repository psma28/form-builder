import { RUT_URL } from "../../utils/RUT_URL";

export async function RUTVerification (rut){
    const url = RUT_URL + rut;
    const response = await fetch(url);
    const data = response.json();
    return data;
}