export function regionesMapper(data){
    const mapped = [];
    data.forEach(item=>{
        const numeroRegion = item["numero_region"];
        let mappedEntry = { id:  numeroRegion, value: numeroRegion, label: item["nombre_region"]};
        mapped.push(mappedEntry);
    })
    return mapped
}