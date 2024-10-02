const institucionesEvaluadorasEDD24 = [
  {
    id: "UFRO",
    value: "UFRO",
    label: "Universidad de La Frontera",
  },
  {
    id: "UCSH",
    value: "UCSH",
    label: "Universidad Católica Silva Henríquez",
  },
  {
    id: "UCT",
    value: "UCT",
    label: "Universidad Católica de Temuco",
  },
  {
    id: "UDP",
    value: "UDP",
    label: "Universidad Diego Portales",
  },
  {
    id: "ULS",
    value: "ULS",
    label: "Universidad de La Serena",
  },
  {
    id: "PUCV",
    value: "PUCV",
    label: "Pontificia Universidad Católica de Valparaíso",
  },
  {
    id: "UDEC",
    value: "UDEC",
    label: "Universidad de Concepción",
  },
];

let area_asignatura = "";
let evidencia = "";

function filterInstitutionKey() {
  let neededId = "";
  if (
    //(area_asignatura === "1059" && evidencia === "si_evidencia") ||
    (area_asignatura === "1058" && evidencia === "no_evidencia") ||
    (area_asignatura === "1027" && evidencia === "si_evidencia") ||
    evidencia === "no_evidencia" ||
    evidencia === "evidencia_m2" ||
    (area_asignatura === "1019" && evidencia === "evidencia_m2") ||
    (area_asignatura === "1011" && evidencia === "si_evidencia") ||
    evidencia === "evidencia_m2" ||
    (area_asignatura === "1064" && evidencia === "si_evidencia") ||
    evidencia === "evidencia_m2" ||
    (area_asignatura === "1149" && evidencia === "si_evidencia") ||
    evidencia === "evidencia_m2" ||
    (area_asignatura === "1072" && evidencia === "si_evidencia") ||
    evidencia === "evidencia_m2" ||
    (area_asignatura === "1072" && evidencia === "si_evidencia") ||
    evidencia === "evidencia_m2"
  ) {
    neededId = "UFRO";
  }

  if (
    (area_asignatura === "1059" && evidencia === "si_evidencia") ||
    (area_asignatura === "1008" && evidencia === "no_evidencia") ||
    (area_asignatura === "1012" && evidencia === "evidencia_m2") ||
    ((area_asignatura === "1025" || area_asignatura === "1054") &&
      (evidencia === "si_evidencia" || evidencia === "evidencia_m2")) ||
    (area_asignatura === "1055" && evidencia === "no_evidencia") ||
    (area_asignatura === "1011" && evidencia === "no_evidencia") ||
    (area_asignatura === "1062" && evidencia === "si_evidencia") ||
    (area_asignatura === "1063" && evidencia === "si_evidencia") ||
    (area_asignatura === "1149" && evidencia === "no_evidencia") ||
    (area_asignatura === "1073" && evidencia === "no_evidencia")
  ) {
    neededId = "UCSH";
  }
  if (
    (area_asignatura === "1059" &&
      (evidencia === "no_evidencia" || evidencia === "evidencia_m2")) ||
    (area_asignatura === "1073" &&
      (evidencia === "si_evidencia" || evidencia === "evidencia_m2"))
  ) {
    neededId = "UCT";
  }

  if (
    (area_asignatura === "1058" && evidencia === "evidencia_m2") ||
    (area_asignatura === "1058" && evidencia === "si_evidencia") ||
    (area_asignatura === "1008" &&
      (evidencia === "si_evidencia" || evidencia === "evidencia_m2")) ||
    (area_asignatura === "1060" && evidencia === "no_evidencia") ||
    (area_asignatura === "1016" &&
      (evidencia === "si_evidencia" || evidencia === "no_evidencia")) ||
    ((area_asignatura === "1017" || area_asignatura === "1113") &&
      evidencia === "evidencia_m2") ||
    ((area_asignatura === "1018" || area_asignatura === "1112") &&
      (evidencia === "si_evidencia" || evidencia === "no_evidencia")) ||
    (area_asignatura === "1055" &&
      (evidencia === "si_evidencia" || evidencia === "evidencia_m2")) ||
    (area_asignatura === "1063" && evidencia === "si_evidencia")
  ) {
    neededId = "UDP";
  }
  if (
    (area_asignatura === "1058" && evidencia === "evidencia_m2") ||
    (area_asignatura === "1016" && evidencia === "evidencia_m2") ||
    (area_asignatura === "1012" && evidencia === "no_evidencia") ||
    (area_asignatura === "1019" && evidencia === "no_evidencia") ||
    ((area_asignatura === "1025" || area_asignatura === "1054") &&
      evidencia === "no_evidencia") ||
    (area_asignatura === "1062" && evidencia === "no_evidencia") ||
    (area_asignatura === "1063" && evidencia === "no_evidencia") ||
    (area_asignatura === "1064" && evidencia === "no_evidencia") ||
    (area_asignatura === "1072" && evidencia === "no_evidencia")
  ) {
    neededId = "ULS";
  }
  if (
    ((area_asignatura === "1061" ||
      area_asignatura === "1111" ||
      area_asignatura === "1060") &&
      evidencia === "si_evidencia") ||
    ((area_asignatura === "1061" || area_asignatura === "1111") &&
      evidencia === "no_evidencia") ||
    (area_asignatura === "1060" && evidencia === "evidencia_m2") ||
    ((area_asignatura === "1014" || area_asignatura === "1110") &&
      evidencia === "si_evidencia") ||
    (area_asignatura === "1009" &&
      (evidencia === "si_evidencia" || evidencia === "no_evidencia")) ||
    (area_asignatura === "1013" &&
      (evidencia === "si_evidencia" ||
        evidencia === "no_evidencia" ||
        evidencia === "evidencia_m2")) ||
    ((area_asignatura === "1018" || area_asignatura === "1112") &&
      evidencia === "evidencia_m2") ||
    (area_asignatura === "1019" && evidencia === "si_evidencia") ||
    (area_asignatura === "1020" &&
      (evidencia === "si_evidencia" ||
        evidencia === "no_evidencia" ||
        evidencia === "evidencia_m2")) ||
    (area_asignatura === "1062" && evidencia === "evidencia_m2")
  ) {
    neededId = "PUCV";
  }
  if (
    ((area_asignatura === "1061" || area_asignatura === "1111") &&
      evidencia === "evidencia_m2") ||
    ((area_asignatura === "1014" || area_asignatura === "1110") &&
      (evidencia === "evidencia_m2" || evidencia === "no_evidencia")) ||
    (area_asignatura === "1009" && evidencia === "evidencia_m2") ||
    (area_asignatura === "1012" && evidencia === "si_evidencia") ||
    ((area_asignatura === "1017" || area_asignatura === "1113") &&
      (evidencia === "si_evidencia" || evidencia === "no_evidencia"))
  ) {
    neededId = "UDEC";
  }
  return neededId;
}

export function setAsignaturaEDD24InstitucionEvaluadora(value) {
  area_asignatura = value;
  const idInstitucion = filterInstitutionKey();
  const instituciones = getInstitucion(idInstitucion);
  return sendInstituciones(instituciones);
}
export function setEvidenciaEDD24InstitucionEvaluadora(value) {
  evidencia = value;
  const idInstitucion = filterInstitutionKey();
  const instituciones = getInstitucion(idInstitucion);
  return sendInstituciones(instituciones);
}

function getInstitucion(key) {
  const res = [];
  institucionesEvaluadorasEDD24.forEach((item) => {
    if (item.id === key) {
      res.push(item);
    }
  });
  return res;
}

function sendInstituciones(list) {
  return Promise.resolve(list);
}
