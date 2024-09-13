const colegios = [
  { id: 1, name: "Colegio A" },
  { id: 2, name: "Colegio B" },
  { id: 3, name: "Colegio C" },
  { id: 4, name: "Colegio D" },
  { id: 5, name: "Colegio E" },
];
export function getColegios() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(colegios);
    }, 1000);
  });
}
