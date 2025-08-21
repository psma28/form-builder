const especialidades = [
  {
    id: "e_1",
    value: "Acuicultura",
    label: "Acuicultura",
  },
  {
    id: "e_2",
    value: "Administración",
    label: "Administración",
  },
  {
    id: "e_3",
    value: "Agropecuaria",
    label: "Agropecuaria",
  },
  {
    id: "e_4",
    value: "Asistencia en Geología",
    label: "Asistencia en Geología",
  },
  {
    id: "e_5",
    value: "Atención de Enfermería",
    label: "Atención de Enfermería",
  },
  {
    id: "e_6",
    value: "Atención de Párvulos",
    label: "Atención de Párvulos",
  },
  {
    id: "e_7",
    value: "Conectividad y Redes",
    label: "Conectividad y Redes",
  },
  {
    id: "e_8",
    value: "Construcción",
    label: "Construcción",
  },
  {
    id: "e_9",
    value: "Construcción Metálicas",
    label: "Construcción Metálicas",
  },
  {
    id: "e_10",
    value: "Contabilidad",
    label: "Contabilidad",
  },
  {
    id: "e_11",
    value: "Dibujo Técnico",
    label: "Dibujo Técnico",
  },
  {
    id: "e_12",
    value: "Elaboración Industrial de Alimentos",
    label: "Elaboración Industrial de Alimentos",
  },
  {
    id: "e_13",
    value: "Electricidad",
    label: "Electricidad",
  },
  {
    id: "e_15",
    value: "Electrónica",
    label: "Electrónica",
  },
  {
    id: "e_16",
    value: "Explotación Minera",
    label: "Explotación Minera",
  },
  {
    id: "e_17",
    value: "Forestal",
    label: "Forestal",
  },
  {
    id: "e_18",
    value: "Gastronomía",
    label: "Gastronomía",
  },
  {
    id: "e_19",
    value: "Gráfica",
    label: "Gráfica",
  },
  {
    id: "e_20",
    value: "Instalaciones Sanitarias",
    label: "Instalaciones Sanitarias",
  },
  {
    id: "e_21",
    value: "Mecánica Automotriz",
    label: "Mecánica Automotriz",
  },
  {
    id: "e_22",
    value: "Mecánica Industrial",
    label: "Mecánica Industrial",
  },
  {
    id: "e_23",
    value: "Mecánica de Mantención de Aeronaves",
    label: "Mecánica de Mantención de Aeronaves",
  },
  {
    id: "e_24",
    value: "Mecánica Extractiva",
    label: "Mecánica Extractiva",
  },
  {
    id: "e_25",
    value: "Montaje Industrial",
    label: "Montaje Industrial",
  },
  {
    id: "e_26",
    value: "Muebles y Terminaciones en Madera",
    label: "Muebles y Terminaciones en Madera",
  },
  {
    id: "e_27",
    value: "Operaciones Portuarias",
    label: "Operaciones Portuarias",
  },
  {
    id: "e_28",
    value: "Pesquería",
    label: "Pesquería",
  },
  {
    id: "e_29",
    value: "Programación",
    label: "Programación",
  },
  {
    id: "e_30",
    value: "Química Industrial",
    label: "Química Industrial",
  },
  {
    id: "e_31",
    value: "Refrigeración y Climatización",
    label: "Refrigeración y Climatización",
  },
  {
    id: "e_32",
    value: "Servicios de Hotelería",
    label: "Servicios de Hotelería",
  },
  {
    id: "e_33",
    value: "Servicios de Turismo",
    label: "Servicios de Turismo",
  },
  {
    id: "e_34",
    value: "Telecomunicaciones",
    label: "Telecomunicaciones",
  },
  {
    id: "e_35",
    value: "Tripulación de Naves Mercantes y Especiales",
    label: "Tripulación de Naves Mercantes y Especiales",
  },
  {
    id: "e_36",
    value: "Vestuario y Confección Textil",
    label: "Vestuario y Confección Textil",
  },
];

export function getEspecialidades() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(especialidades);
    }, 0);
  });
}
