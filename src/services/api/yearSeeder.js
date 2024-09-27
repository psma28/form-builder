export function getYears() {
  const years = [];
  const currentYear = new Date().getFullYear();

  for (let year = 1960; year <= currentYear - 5; year++) {
    years.push({ id: year - 1960 + 1, name: "" + year });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(years);
    }, 0);
  });
}
