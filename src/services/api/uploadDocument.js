export async function uploadDocument(docData) {
  const csrfToken = document.querySelector("#_token").value;

  const res = await fetch("https://rrhh.iie.cl/api/personas/subirarchivos", {
    method: "POST",
    mode: "cors",
    headers: {
      _token: csrfToken,
    },
    body: docData,
  });
  const data = res.json();
  return data;
}
