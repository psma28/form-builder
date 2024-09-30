export function institucionesMapper(data) {
  const mapped = [];
  data.forEach((item) => {
    const nombreInstitucion = item["nombre_institucion"];
    let mappedEntry = { id: item.id, value: item.id, label: nombreInstitucion };
    mapped.push(mappedEntry);
  });
  mapped.push({
    id: 1000,
    value: 1000,
    label: "Otro (Especifique en el campo que aparecerá abajo)",
    events:[
        {
            target: "universidad",
            payload: {
                visible: true
            }
        }
    ]
  });
  return mapped;
}
