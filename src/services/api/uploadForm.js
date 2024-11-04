export async function uploadForm(form) {
  //const csrfToken = document.querySelector("#_token").value;
  const res = await fetch("https://devrrhh.iie.cl/rrhh_api/form/subir-postulacion", {
    method: "POST",
    body: form,
    //headers: {"X-CSRF-TOKEN": csrfToken,},
    mode: "cors",
    cache: "no-cache",
  })
  const data = await res.json();
  console.log("Respuesta subida", data);
  
  return data;
}
