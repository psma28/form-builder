const identidadGenero = [
  {
    id: 81,
    label: "Masculino",
    value: 81,
  },
  {
    id: 80,
    label: "Femenino",
    value: 80,
  },
  {
    id: 1138,
    label: "Otro",
    value: 1138,
  },
];

export function getListaIdentidadGenero() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(identidadGenero);
    }, 0);
  });
}
