const pertenenciaPueblo = [
  {
    id: 1128,
    value: 1128,
    label: "No Pertenece",
  },
  {
    id: 1116,
    value: 1116,
    label: "Alacalufe",
  },
  {
    id: 1117,
    value: 1117,
    label: "Atacameño",
  },
  {
    id: 1118,
    value: 1118,
    label: "Aymará",
  },
  {
    id: 1119,
    value: 1119,
    label: "Colla",
  },
  {
    id: 1120,
    value: 1120,
    label: "Mapuche",
  },
  {
    id: 1122,
    value: 1122,
    label: "Pueblo originario de otro país",
  },
  {
    id: 1123,
    value: 1123,
    label: "Quechua",
  },
  {
    id: 1124,
    value: 1124,
    label: "Rapa Nui",
  },
  {
    id: 1125,
    value: 1125,
    label: "Yámana (Yagán)",
  },
  {
    id: 1121,
    value: 1121,
    label: "Ninguno de los anteriores",
  },
];

export function getListaPertenenciaPueblos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pertenenciaPueblo);
    }, 0);
  });
}
