const institucionesEvaluadorasEDD = [
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

const mapeo = {
  "1373_m1": "UDP",
  "1373_m2": "UDP",
  "1373_m3": "UCSH",
  "1346_m1": "PUCV",
  "1346_m2": "UDEC",
  "1346_m3": "UDEC",
  "1347_m1": "PUCV",
  "1347_m2": "UDEC",
  "1347_m3": "UDEC",
  "1348_m1": "PUCV",
  "1348_m2": "UDEC",
  "1348_m3": "UDEC",
  "1349_m1": "UFRO",
  "1349_m2": "UFRO",
  "1349_m3": "UCSH",
  "1350_m1": "UCSH",
  "1350_m2": "PUCV",
  "1350_m3": "ULS",
  "1351_m1": "UFRO",
  "1351_m2": "UFRO",
  "1351_m3": "ULS",
  "1352_m1": "PUCV",
  "1352_m2": "PUCV",
  "1352_m3": "UDP",
  "1353_m1": "UFRO",
  "1353_m2": "UFRO",
  "1353_m3": "UCSH",
  "1354_m1": "UCSH",
  "1354_m2": "UDP",
  "1354_m3": "UCT",
  "1355_m1": "UCSH",
  "1355_m2": "UCSH",
  "1355_m3": "ULS",
  "1356_m1": "PUCV",
  "1356_m2": "UDEC",
  "1356_m3": "UDEC",
  "1357_m1": "UFRO",
  "1357_m2": "UFRO",
  "1357_m3": "UFRO",
  "1358_m1": "UDP",
  "1358_m2": "ULS",
  "1358_m3": "UFRO",
  "1359_m1": "PUCV",
  "1359_m2": "UDEC",
  "1359_m3": "UDEC",
  "1360_m1": "PUCV",
  "1360_m2": "UDEC",
  "1360_m3": "UDEC",
  "1361_m1": "UDP",
  "1361_m2": "ULS",
  "1361_m3": "UCT",
  "1362_m1": "UDEC",
  "1362_m2": "UDP",
  "1362_m3": "UDEC",
  "1363_m1": "UDEC",
  "1363_m2": "UDP",
  "1363_m3": "UDEC",
  "1364_m1": "UDP",
  "1364_m2": "PUCV",
  "1364_m3": "UDP",
  "1365_m1": "UDP",
  "1365_m2": "PUCV",
  "1365_m3": "UDP",
  "1366_m1": "PUCV",
  "1366_m2": "UFRO",
  "1366_m3": "ULS",
  "1367_m1": "UFRO",
  "1367_m2": "UFRO",
  "1367_m3": "ULS",
  "1368_m1": "PUCV",
  "1368_m2": "UDEC",
  "1368_m3": "UDEC",
  "1369_m1": "UCSH",
  "1369_m2": "UCSH",
  "1369_m3": "ULS",
  "1370_m1": "UCSH",
  "1370_m2": "UCSH",
  "1370_m3": "ULS",
  "1371_m1": "UCT",
  "1371_m2": "UCT",
  "1371_m3": "UCSH",
  "1372_m1": "UDP",
  "1372_m2": "UDP",
  "1372_m3": "UCSH",
};

let area_asignatura = "";
let evidencia = "";

function obtenerInstitucion() {
  return mapeo[`${area_asignatura}_${evidencia}`] || "";
}

export function setAsignaturaEDD24InstitucionEvaluadora(value) {
  area_asignatura = value;
  const idInstitucion = obtenerInstitucion();
  const institucion = getInstitucion(idInstitucion);
  return sendInstitucion(institucion);
}
export function setEvidenciaEDD24InstitucionEvaluadora(value) {
  evidencia = value;
  const idInstitucion = obtenerInstitucion();
  const institucion = getInstitucion(idInstitucion);
  return sendInstitucion(institucion);
}

function getInstitucion(key) {
  let res = "";
  institucionesEvaluadorasEDD.forEach((item) => {
    if (item.id === key) {
      res = item.value;
    }
  });
  return res;
}

function sendInstitucion(institucion) {
  return Promise.resolve(institucion);
}

export function getInstitucionesEvaluadoras(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(institucionesEvaluadorasEDD);
    }, 0);
  });
}