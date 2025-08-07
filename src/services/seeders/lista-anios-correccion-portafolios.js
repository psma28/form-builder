export function getAniosCorreccionPortafolios() {
  const years = [];
  const currentYear = new Date().getFullYear();

  for (let year = 1960; year <= currentYear-1; year++) {
    years.push({ id: year - 1960 + 1, label: "" + year, value: year });
  }

  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(years);
    }, 0);
  });
}