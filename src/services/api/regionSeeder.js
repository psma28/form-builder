const regiones = [
  {
    id: 1,
    name: "Arica y Parinacota",
    value: "arica y parinacota",
    comunas: [
      { id: 1, name: "Arica", value: "arica" },
      { id: 2, name: "Camarones", value: "camarones" },
    ],
  },
  {
    id: 2,
    name: "Tarapacá",
    value: "tarapaca",
    comunas: [
      { id: 3, name: "Iquique", value: "iquique" },
      { id: 4, name: "Alto Hospicio", value: "alto hospicio" },
      { id: 5, name: "Pozo Almonte", value: "pozo almonte" },
      { id: 6, name: "Huara", value: "huara" },
      { id: 7, name: "Pica", value: "pica" },
    ],
  },
  {
    id: 3,
    name: "Antofagasta",
    value: "antofagasta",
    comunas: [
      { id: 8, name: "Antofagasta", value: "antofagasta" },
      { id: 9, name: "Mejillones", value: "mejillones" },
      { id: 10, name: "Taltal", value: "taltal" },
      { id: 11, name: "Sierra Gorda", value: "sierra gorda" },
      { id: 12, name: "Calama", value: "calama" },
    ],
  },
  {
    id: 4,
    name: "Atacama",
    value: "atacama",
    comunas: [
      { id: 13, name: "Copiapó", value: "copiapo" },
      { id: 14, name: "Caldera", value: "caldera" },
      { id: 15, name: "Tierra Amarilla", value: "tierra amarilla" },
    ],
  },
  {
    id: 5,
    name: "Coquimbo",
    value: "coquimbo",
    comunas: [
      { id: 16, name: "La Serena", value: "la serena" },
      { id: 17, name: "Coquimbo", value: "coquimbo" },
      { id: 18, name: "Ovalle", value: "ovalle" },
    ],
  },
  {
    id: 6,
    name: "Valparaíso",
    value: "valparaiso",
    comunas: [
      { id: 19, name: "Valparaíso", value: "valparaiso" },
      { id: 20, name: "Viña del Mar", value: "vina del mar" },
      { id: 21, name: "Quilpué", value: "quilpue" },
    ],
  },
  {
    id: 7,
    name: "Metropolitana de Santiago",
    value: "metropolitana de santiago",
    comunas: [
      { id: 22, name: "Santiago", value: "santiago" },
      { id: 23, name: "Las Condes", value: "las condes" },
      { id: 24, name: "Providencia", value: "providencia" },
    ],
  },
  {
    id: 8,
    name: "Libertador General Bernardo O'Higgins",
    value: "libertador general bernardo ohiggins",
    comunas: [
      { id: 25, name: "Rancagua", value: "rancagua" },
      { id: 26, name: "San Fernando", value: "san fernando" },
      { id: 27, name: "Pichilemu", value: "pichilemu" },
    ],
  },
  {
    id: 9,
    name: "Maule",
    value: "maule",
    comunas: [
      { id: 28, name: "Talca", value: "talca" },
      { id: 29, name: "Curicó", value: "curico" },
      { id: 30, name: "Linares", value: "linares" },
    ],
  },
  {
    id: 10,
    name: "Ñuble",
    value: "nuble",
    comunas: [
      { id: 31, name: "Chillán", value: "chillan" },
      { id: 32, name: "Quirihue", value: "quirihue" },
      { id: 33, name: "Bulnes", value: "bulnes" },
    ],
  },
  {
    id: 11,
    name: "Biobío",
    value: "biobio",
    comunas: [
      { id: 34, name: "Concepción", value: "concepcion" },
      { id: 35, name: "Los Ángeles", value: "los angeles" },
      { id: 36, name: "Talcahuano", value: "talcahuano" },
    ],
  },
  {
    id: 12,
    name: "La Araucanía",
    value: "la araucania",
    comunas: [
      { id: 37, name: "Temuco", value: "temuco" },
      { id: 38, name: "Villarrica", value: "villarrica" },
      { id: 39, name: "Angol", value: "angol" },
    ],
  },
  {
    id: 13,
    name: "Los Ríos",
    value: "los rios",
    comunas: [
      { id: 40, name: "Valdivia", value: "valdivia" },
      { id: 41, name: "La Unión", value: "la union" },
      { id: 42, name: "Panguipulli", value: "panguipulli" },
    ],
  },
  {
    id: 14,
    name: "Los Lagos",
    value: "los lagos",
    comunas: [
      { id: 43, name: "Puerto Montt", value: "puerto montt" },
      { id: 44, name: "Osorno", value: "osorno" },
      { id: 45, name: "Ancud", value: "ancud" },
    ],
  },
  {
    id: 15,
    name: "Aysén del General Carlos Ibáñez del Campo",
    value: "aysen del general carlos ibanez del campo",
    comunas: [
      { id: 46, name: "Coyhaique", value: "coyhaique" },
      { id: 47, name: "Puerto Aysén", value: "puerto aysen" },
      { id: 48, name: "Chile Chico", value: "chile chico" },
    ],
  },
  {
    id: 16,
    name: "Magallanes y de la Antártica Chilena",
    value: "magallanes y de la antartica chilena",
    comunas: [
      { id: 49, name: "Punta Arenas", value: "punta arenas" },
      { id: 50, name: "Puerto Natales", value: "puerto natales" },
      { id: 51, name: "Cabo de Hornos", value: "cabo de hornos" },
    ],
  },
];

export function getRegiones() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(regiones);
    }, 1000);
  });
}

export function getComunas(regionName) {
  const comunas = regiones.find(
    (region) => region.value === regionName
  ).comunas;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comunas);
    }, 1000);
  });
}
