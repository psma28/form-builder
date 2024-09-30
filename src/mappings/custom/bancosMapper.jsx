export function bancosMapper(data){
    const mapped = [];
    data.forEach(item=>{
        const nombreBanco = item["nombre_banco"];
        let mappedEntry = { id:  item.id, value: nombreBanco, label: nombreBanco};
        mapped.push(mappedEntry);
    })
    return mapped
}