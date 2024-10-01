const tipoCuenta = [
  {
    id: 1,
    value: 1,
    label: "Cuenta Corriente",
  },
  {
    id: 2,
    value: 2,
    label: "Cuenta Vista/RUT",
  },
  {
    id: 3,
    value: 3,
    label: "Cuenta de Ahorro",
  },
  {
    id: 4,
    value: 4,
    label: "Chequera Electrónica",
  },
];

export function getTiposCuenta() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tipoCuenta);
    }, 0);
  });
}
