//Encerrar elemento dentro de /a
export function handleLinkOnLabel(schema, componentKey){
    const parts = schema.split('/l')
    const label = parts[0]
    const url = parts[1]
    return (
      <a href={url} target="_blank" key={componentKey}>
        {label}
      </a>
    )
  }