const universidades = [
    { id: 1, name: "Universidad de Chile" },
    { id: 2, name: "Pontificia Universidad Católica de Chile" },
    { id: 3, name: "Universidad de Concepción" },
    { id: 4, name: "Universidad Técnica Federico Santa María" },
    { id: 5, name: "Universidad de Santiago de Chile" },
    { id: 6, name: "Universidad Austral de Chile" },
    { id: 7, name: "Universidad de Valparaíso" },
    { id: 8, name: "Universidad de La Frontera" },
    { id: 9, name: "Universidad Católica del Norte" },
    { id: 10, name: "Universidad de Los Andes" },
    { id: 11, name: "Universidad Adolfo Ibáñez" },
    { id: 12, name: "Universidad de Talca" },
    { id: 13, name: "Universidad Diego Portales" },
    { id: 14, name: "Universidad de Antofagasta" },
    { id: 15, name: "Universidad de Magallanes" },
    { id: 16, name: "Universidad de Atacama" },
    { id: 17, name: "Universidad de Playa Ancha" },
    { id: 18, name: "Universidad de Tarapacá" },
    { id: 19, name: "Universidad Metropolitana de Ciencias de la Educación" },
    { id: 20, name: "Universidad Alberto Hurtado" }
  ];
  
  export function getUniversidades() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(universidades);
      }, 0);
    });
  }