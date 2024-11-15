import { TIPO_CUENTA_URL } from "../../utils/URL";

export async function getTiposCuenta(prev) {
  const res = await fetch(TIPO_CUENTA_URL);
  let data = await res.json();
  if(prev !== "1178"){
    const aux = []
    data.forEach(tipo => {
      if(tipo.value!==1156) aux.push(tipo)
    });
    data = aux;
  }
  return data;
}
