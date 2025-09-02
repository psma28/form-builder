export function getAniosCorreccionPortafolios() {
  const years = [];
  const currentYear = new Date().getFullYear();

  for (let year = 2003; year <= currentYear-1; year++) {
    years.push({ id: `ANIOCORRECCION${year - 2003 + 1}`, label: "" + year, value: year });
  }

  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(years);
    }, 0);
  });
}