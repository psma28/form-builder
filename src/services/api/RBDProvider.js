const RBDData = [
  {
    id: 1,
    establecimiento: "LICEO POLITECNICO ARICA",
    comuna: "ARICA",
  },
  {
    id: 2,
    establecimiento: "PARVULARIO LAS ESPIGUITAS",
    comuna: "ARICA",
  },
  {
    id: 9747,
    establecimiento: "C.E.I.A.PEDRO AGUIRRE CERDA",
    comuna: "PEDRO AGUIRRE CERDA",
  },
];

export function getRBDEstablecimiento(number) {
  let rbd = RBDData.find((data) => "" + data.id === "" + number);
  let res = "";
  if (rbd) res = rbd.establecimiento;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 1000);
  });
}

export function getRBDComuna(number) {
  let rbd = RBDData.find((data) => "" + data.id === "" + number);
  let res = "";
  if (rbd) res = rbd.comuna;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 1000);
  });
}
