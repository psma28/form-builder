export function getAnios() {
  const years = [];
  const currentYear = new Date().getFullYear() - 5;

  // for (let year = 1960; year <= currentYear - 5; year++) {
  for (let year = currentYear; year >= 1960; year--) {
    years.push({ id: `ANIO${year - 1960 + 1}`, label: "" + year, value: year });
  }

  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(years);
    }, 0);
  });
}
