const cargoCentrosCorrecion = [
  {
    id: "cc1",
    label: "PUC: Pontificia Universidad Católica de Chile",
    value: "cc1",
  },
  {
    id: "cc2",
    label: "UDP: Universidad Diego Portales",
    value: "cc2",
  },
  {
    id: "cc3",
    label: "ULS: Universidad de La Serena",
    value: "cc3",
  },
  {
    id: "cc4",
    label: "UCSH: Universidad Católica Silva Henríquez",
    value: "cc4",
  },
  {
    id: "cc5",
    label: "UDEC: Universidad de Concepción",
    value: "cc5",
  },
  {
    id: "cc6",
    label: "UAI: Universidad Adolfo Ibañez",
    value: "cc6",
  },
  {
    id: "cc7",
    label: "PUCV: Pontificia Universidad Católica de Valparaíso",
    value: "cc7",
  },
  {
    id: "cc8",
    label: "UCT: Universidad Católica de Temuco",
    value: "cc8",
  },
  {
    id: "cc9",
    label: "UFRO: Universidad de La Frontera",
    value: "cc9",
  },
  {
    id: "cc10",
    label: "Otra",
    value: "cc10",
    events: [
      {
        target: "otro_centro",
        payload: {
          visible: true,
        },
      },
    ],
  },
];

export function getCargoCentrosCorreccion() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cargoCentrosCorrecion);
    }, 0);
  });
}
