const situacionDiscapacidad = [
  {
    id: 1130,
    value: 1130,
    label: "No",
  },
  {
    id: 1131,
    value: 1131,
    label: "Orgánica/Visceral",
  },
  {
    id: 1132,
    value: 1132,
    label: "Física/Motora",
  },
  {
    id: 1133,
    value: 1133,
    label: "Sensorial/Auditiva",
  },
  {
    id: 1134,
    value: 1134,
    label: "Sensorial/Visual",
  },
  {
    id: 1135,
    value: 1135,
    label: "Psíquica",
  },
];

export function getListaSituacionDiscapacidad() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(situacionDiscapacidad);
    }, 0);
  });
}
