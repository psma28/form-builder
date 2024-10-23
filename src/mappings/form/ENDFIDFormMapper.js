import { getBase64 } from "../../utils/base64Converter";
import { formatDate } from "../../utils/formDateFormatter";
import { turnToRutForm } from "../../utils/RUTFormatter";

export function endfidFD(stagedForm) {
  var formData = new FormData();
  console.log("form satged", stagedForm);

  formData.append(
    "run",
    turnToRutForm(stagedForm.find((element) => element.key === "run").value)
  );
  formData.append("id_proyecto", 27);
  const cargos = stagedForm.find(
    (element) => element.key === "cargo_postulacion"
  ).value;
  console.log("cargos: ", cargos);

  const postula_examinador = cargos.includes("postula_examinador") ? 1 : 0;
  const postula_supervisor = cargos.includes("postula_supervisor") ? 1 : 0;
  const postula_tecnico_apoyo = cargos.includes("postula_examinador") ? 1 : 0;
  formData.append("postula_examinador", postula_examinador);
  formData.append("postula_supervisor", postula_supervisor);
  formData.append("postula_tecnico_apoyo", postula_tecnico_apoyo);
  formData.append("modificado", 0);

  formData.append(
    "nombres",
    stagedForm.find((element) => element.key === "nombres").value
  );
  formData.append(
    "nombre_social",
    stagedForm.find((element) => element.key === "nombre_social").value
  );
  formData.append(
    "apellido_paterno",
    stagedForm.find((element) => element.key === "apellido_paterno").value
  );
  formData.append(
    "apellido_materno",
    stagedForm.find((element) => element.key === "apellido_materno").value
  );
  formData.append(
    "fecha_nacimiento",
    formatDate(
      stagedForm.find((element) => element.key === "fecha_nacimiento").value
    )
  );
  formData.append(
    "id_comuna_nacimiento",
    stagedForm.find((element) => element.key === "id_comuna_nacimiento")
      ?.value ?? null
  );
  formData.append(
    "direccion_residencia",
    stagedForm.find((element) => element.key === "domicilio").value
  );
  formData.append(
    "nacionalidad",
    stagedForm.find((element) => element.key === "nacionalidad").value
  );
  formData.append(
    "sector_residencia",
    stagedForm.find((element) => element.key === "domicilio_sector").value
  );
  formData.append(
    "otro_lugar_nacimiento",
    stagedForm.find((element) => element.key === "otro_lugar_nacimiento")
      ?.value ?? ""
  );
  formData.append(
    "otra_nacionalidad",
    stagedForm.find((element) => element.key === "otra_nacionalidad")?.value ??
      ""
  );
  formData.append(
    "id_comuna_residencia",
    stagedForm.find((element) => element.key === "id_comuna_residencia").value
  );
  formData.append(
    "id_comuna_postulacion",
    stagedForm.find((element) => element.key === "id_comuna_residencia").value
  );
  formData.append(
    "id_sexo",
    stagedForm.find((element) => element.key === "id_sexo").value
  );
  formData.append(
    "id_estado_civil",
    stagedForm.find((element) => element.key === "id_estado_civil").value
  );
  formData.append(
    "id_identidad_genero",
    stagedForm.find((element) => element.key === "id_identidad_genero").value
  );
  formData.append(
    "id_situacion_discapacidad",
    stagedForm.find((element) => element.key === "id_situacion_discapacidad")
      .value
  );
  formData.append(
    "id_pertenencia_pueblo",
    stagedForm.find((element) => element.key === "id_pertenencia_pueblo").value
  );
  formData.append(
    "correo_electronico_principal",
    stagedForm.find((element) => element.key === "email").value
  );
  formData.append(
    "telefono_principal",
    stagedForm.find((element) => element.key === "telefono").value
  );
  formData.append("id_usuario", "");
  formData.append(
    "nivel_estudios",
    stagedForm.find((element) => element.key === "nivel_estudios").value
  );
  let universidad =
    stagedForm.find((element) => element.key === "id_institucion")?.value ?? "";
  if (+universidad === 1000)
    universidad =
      stagedForm.find((element) => element.key === "universidad")?.value ?? "";

  formData.append("universidad", universidad);
  formData.append(
    "id_universidad",
    stagedForm.find((element) => element.key === "id_institucion")?.value ?? ""
  );
  formData.append(
    "profesion",
    stagedForm.find((element) => element.key === "profesion")?.value ?? ""
  );
  formData.append(
    "otra_profesion",
    stagedForm?.find((element) => element.key === "otra_profesion")?.value ?? ""
  );
  let datosBancarios = {
    banco: stagedForm.find((element) => element.key === "banco_nombre").value,
    tipo_cuenta: stagedForm.find(
      (element) => element.key === "banco_tipo_cuenta"
    ).value,
    numero_cuenta: stagedForm.find(
      (element) => element.key === "banco_nro_cuenta"
    ).value,
  };
  datosBancarios = JSON.stringify(datosBancarios);
  console.log("datos bancarios", datosBancarios);

  formData.append("datos_bancarios", datosBancarios);
  formData.append("apoyo_discapacidad_visual", 0);
  formData.append("apoyo_discapacidad_auditiva", 0);
  return formData;
}

export async function endfidDocuments(stagedForm) {
  const documentData = [];

  const ci = stagedForm.find((element) => element.key === "doc_ci").value;
  if (ci) {
    const ciData = await getBase64(ci);
    const ciDocData = new FormData();
    ciDocData.append("id_persona_archivo", -1);
    ciDocData.append(
      "run",
      turnToRutForm(stagedForm.find((element) => element.key === "run").value)
    );
    ciDocData.append("documento", ciData);
    ciDocData.append(
      "nombreArchivo",
      turnToRutForm(stagedForm.find((element) => element.key === "run").value) +
        ci.name
    );
    ciDocData.append("tipo", "cedula_identidad");
    documentData.push(ciDocData);
  }

  const cv = stagedForm.find((element) => element.key === "doc_cv").value;
  if (cv) {
    const cvData = await getBase64(cv);
    const cvDocData = new FormData();
    cvDocData.append("id_persona_archivo", -1);
    cvDocData.append(
      "run",
      turnToRutForm(stagedForm.find((element) => element.key === "run").value)
    );
    cvDocData.append("documento", cvData);
    cvDocData.append(
      "nombreArchivo",
      turnToRutForm(stagedForm.find((element) => element.key === "run").value) +
        cv.name
    );
    cvDocData.append("tipo", "curriculum");
    documentData.push(cvDocData);
  }

  const ct = stagedForm.find((element) => element.key === "doc_ct").value;
  if (ct) {
    const ctData = await getBase64(ct);
    const ctDocData = new FormData();
    ctDocData.append("id_persona_archivo", -1);
    ctDocData.append(
      "run",
      turnToRutForm(stagedForm.find((element) => element.key === "run").value)
    );
    ctDocData.append("documento", ctData);
    ctDocData.append(
      "nombreArchivo",
      turnToRutForm(stagedForm.find((element) => element.key === "run").value) +
        ct.name
    );
    ctDocData.append("tipo", "certificado_titulo");
    documentData.push(ctDocData);
  }
  return documentData;
}
