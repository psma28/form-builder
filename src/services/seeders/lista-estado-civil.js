const estadosCiviles =[
    {
        "id": 83,
        "value": 83,
        "label": "Soltero(a)"
    },
    {
        "id": 82,
        "value": 82,
        "label": "Casado(a)"
    },
    {
        "id": 122,
        "value": 122,
        "label": "Separado(a)"
    },
    {
        "id": 119,
        "value": 119,
        "label": "Separado(a) de hecho"
    },
    {
        "id": 121,
        "value": 121,
        "label": "Viudo(a)"
    },
    {
        "id": 118,
        "value": 118,
        "label": "Divorciado(a)"
    },
    {
        "id": 120,
        "value": 120,
        "label": "Conviviente Civil"
    }
]

export function getListaEstadosCiviles(){
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(estadosCiviles);
        }, 0);
      });
}