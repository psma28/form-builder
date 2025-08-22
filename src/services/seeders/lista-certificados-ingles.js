import { CERTIFICADOS_INGLES_URL } from "../../utils/URL";

export async function getCertificadosIngles() {
  const res = await fetch(CERTIFICADOS_INGLES_URL);
  const data = await res.json();
  const updatedEnglishCert = data.map(item => {
    return {
      id: item.id,
      // value: item.value,
      value: item.label,
      label: item.label,
    };
  });
  return updatedEnglishCert;
}
