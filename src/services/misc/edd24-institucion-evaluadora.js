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
  "1373_M1": "UDP",
  "1373_M2": "UDP",
  "1373_M3": "UCSH",
  "1346_M1": "PUCV",
  "1346_M2": "UDEC",
  "1346_M3": "UDEC",
  "1347_M1": "PUCV",
  "1347_M2": "UDEC",
  "1347_M3": "UDEC",
  "1348_M1": "PUCV",
  "1348_M2": "UDEC",
  "1348_M3": "UDEC",
  "1349_M1": "UFRO",
  "1349_M2": "UFRO",
  "1349_M3": "UCSH",
  "1350_M1": "UCSH",
  "1350_M2": "PUCV",
  "1350_M3": "ULS",
  "1351_M1": "UFRO",
  "1351_M2": "UFRO",
  "1351_M3": "ULS",
  "1352_M1": "PUCV",
  "1352_M2": "PUCV",
  "1352_M3": "UDP",
  "1353_M1": "UFRO",
  "1353_M2": "UFRO",
  "1353_M3": "UCSH",
  "1354_M1": "UCSH",
  "1354_M2": "UDP",
  "1354_M3": "UCT",
  "1355_M1": "UCSH",
  "1355_M2": "UCSH",
  "1355_M3": "ULS",
  "1356_M1": "PUCV",
  "1356_M2": "UDEC",
  "1356_M3": "UDEC",
  "1357_M1": "UFRO",
  "1357_M2": "UFRO",
  "1357_M3": "UFRO",
  "1358_M1": "UDP",
  "1358_M2": "ULS",
  "1358_M3": "UFRO",
  "1359_M1": "PUCV",
  "1359_M2": "UDEC",
  "1359_M3": "UDEC",
  "1360_M1": "PUCV",
  "1360_M2": "UDEC",
  "1360_M3": "UDEC",
  "1361_M1": "UDP",
  "1361_M2": "ULS",
  "1361_M3": "UCT",
  "1362_M1": "UDEC",
  "1362_M2": "UDP",
  "1362_M3": "UDEC",
  "1363_M1": "UDEC",
  "1363_M2": "UDP",
  "1363_M3": "UDEC",
  "1364_M1": "UDP",
  "1364_M2": "PUCV",
  "1364_M3": "UDP",
  "1365_M1": "UDP",
  "1365_M2": "PUCV",
  "1365_M3": "UDP",
  "1366_M1": "PUCV",
  "1366_M2": "UFRO",
  "1366_M3": "ULS",
  "1367_M1": "UFRO",
  "1367_M2": "UFRO",
  "1367_M3": "ULS",
  "1368_M1": "PUCV",
  "1368_M2": "UDEC",
  "1368_M3": "UDEC",
  "1369_M1": "UCSH",
  "1369_M2": "UCSH",
  "1369_M3": "ULS",
  "1370_M1": "UCSH",
  "1370_M2": "UCSH",
  "1370_M3": "ULS",
  "1371_M1": "UCT",
  "1371_M2": "UCT",
  "1371_M3": "UCSH",
  "1372_M1": "UDP",
  "1372_M2": "UDP",
  "1372_M3": "UCSH",
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