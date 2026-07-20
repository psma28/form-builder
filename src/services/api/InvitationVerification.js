import { INVITATION_URL } from "../../utils/URL";

export async function checkInvitation(token) {
  const url = `${INVITATION_URL}/${encodeURIComponent(token)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const result = await response.json();

    if (result.resultado === "error") {
      return {
        ok: false,
        message:
          result.message ||
          "No encontramos una invitación válida para acceder a este formulario.",
      };
    }

    return { ok: true, data: result.data };
  } catch {
    return { ok: false, message: "Ocurrió un error al cargar la invitación." };
  }
}
