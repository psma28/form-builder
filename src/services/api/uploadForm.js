export async function uploadForm(form) {
  const csrfToken = document.querySelector("#_token").value;
  const res = await fetch("https://rrhh.iie.cl/api/web/usuarios/saveusuario", {
    method: "POST",
    body: form,
    headers: {
      _token: csrfToken,
    },
    mode: "cors",
    cache: "no-cache",
  })
  const data = res.json();
  return data;
}
