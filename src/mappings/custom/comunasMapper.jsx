export function comunasMapper(data) {
  const mapped = [];
  data.forEach((item) => {
    let mappedEntry = {
      id: item.id_comuna,
      value: item.id_comuna,
      label: item.nombre,
    };
    mapped.push(mappedEntry);
  });
  return mapped;
}
