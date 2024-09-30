export function comunasMapper(data){
    const mapped = [];
    data.forEach(item=>{
        const nombreComuna = item["nombre_comuna"];
        let mappedEntry = { id:  item.id, value: item.id, label: nombreComuna};
        mapped.push(mappedEntry);
    })
    return mapped
}