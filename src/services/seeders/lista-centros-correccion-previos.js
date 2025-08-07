const centrosCorreccion = [
  {
    id: "cc1",
    label: "PUC: Pontificia Universidad Católica de Chile",
    value: "PUC: Pontificia Universidad Católica de Chile",
  },
  {
    id: "cc2",
    label: "UDP: Universidad Diego Portales",
    value: "UDP: Universidad Diego Portales",
  },
  {
    id: "cc3",
    label: "ULS: Universidad de La Serena",
    value: "UDP: Universidad Diego Portales",
  },
  {
    id: "cc4",
    label: "UCSH: Universidad Católica Silva Henríquez",
    value: "UCSH: Universidad Católica Silva Henríquez",
  },
  {
    id: "cc5",
    label: "UDEC: Universidad de Concepción",
    value: "UDEC: Universidad de Concepción",
  },
  {
    id: "cc6",
    label: "UAI: Universidad Adolfo Ibañez",
    value: "UAI: Universidad Adolfo Ibañez",
  },
  {
    id: "cc7",
    label: "PUCV: Pontificia Universidad Católica de Valparaíso",
    value: "PUCV: Pontificia Universidad Católica de Valparaíso",
  },
  {
    id: "cc8",
    label: "UCT: Universidad Católica de Temuco",
    value: "UCT: Universidad Católica de Temuco",
  },
  {
    id: "cc9",
    label: "UFRO: Universidad de La Frontera",
    value: "UFRO: Universidad de La Frontera",
  },
  {
    id: "cc10",
    label: "Otra",
    value: "Otra",
    events: [
      {
        target: "otro_centro_correccion",
        payload: {
          visible: true,
        },
      },
    ],
  },
];

export function getCentrosCorreccionPrevios() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(centrosCorreccion);
    }, 0);
  });
}