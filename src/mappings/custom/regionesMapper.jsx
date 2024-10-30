export function regionesMapper(data) {
  const mapped = [];
  data.forEach((item) => {
    let mappedEntry = {
      id: item.id_region,
      value: item.id_region,
      label: item.nombre,
    };
    mapped.push(mappedEntry);
  });
  return mapped;
}
