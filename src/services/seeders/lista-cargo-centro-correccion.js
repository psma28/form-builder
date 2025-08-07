const cargoCentrosCorrecion = [
  {
    id: "cargocentro1",
    label: "Corrector/a",
    value: "Corrector/a",
  },
  {
    id: "cargocentro2",
    label: "Supervisor/a",
    value: "Supervisor/a",
  },
  {
    id: "cargocentro3",
    label: "Encargado/a de Sector",
    value: "Encargado/a de Sector",
  },
];

export function getCargoCentrosCorreccion() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cargoCentrosCorrecion);
    }, 0);
  });
}
