const sexos = [
  {
    id: 81,
    label: "Hombre",
    value: 81,
  },
  {
    id: 80,
    label: "Mujer",
    value: 80,
  },
];

export function getListaSexos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sexos);
    }, 0);
  });
}
