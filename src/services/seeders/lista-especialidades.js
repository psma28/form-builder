const especialidades = [
    {
      id: "e_1",
      value: "e_1",
      label: "Acuicultura",
    },
    {
      id: "e_2",
      value: "e_2",
      label: "Administración",
    },
    {
      id: "e_3",
      value: "e_3",
      label: "Agropecuaria",
    },
    {
      id: "e_4",
      value: "e_4",
      label: "Asistencia en Geología",
    },
    {
      id: "e_5",
      value: "e_5",
      label: "Atención de Enfermería",
    },
    {
      id: "e_6",
      value: "e_6",
      label: "Atención de Párvulos",
    },
    {
      id: "e_7",
      value: "e_7",
      label: "Conectividad y Redes",
    },
    {
      id: "e_8",
      value: "e_8",
      label: "Construcción",
    },
    {
      id: "e_9",
      value: "e_9",
      label: "Construcción Metálicas",
    },
    {
      id: "e_10",
      value: "e_10",
      label: "Contabilidad",
    },
    {
      id: "e_11",
      value: "e_11",
      label: "Dibujo Técnico",
    },
    {
      id: "e_12",
      value: "e_12",
      label: "Elaboración Industrial de Alimentos",
    },
    {
      id: "e_13",
      value: "e_13",
      label: "Electricidad",
    },
    {
      id: "e_15",
      value: "e_15",
      label: "Electrónica",
    },
    {
      id: "e_16",
      value: "e_16",
      label: "Explotación Minera",
    },
    {
      id: "e_17",
      value: "e_17",
      label: "Forestal",
    },
    {
      id: "e_18",
      value: "e_18",
      label: "Gastronomía",
    },
    {
      id: "e_19",
      value: "e_19",
      label: "Gráfica",
    },
    {
      id: "e_20",
      value: "e_20",
      label: "Instalaciones Sanitarias",
    },
    {
      id: "e_21",
      value: "e_21",
      label: "Mecánica Automotriz",
    },
    {
      id: "e_22",
      value: "e_22",
      label: "Mecánica Industrial",
    },
    {
      id: "e_23",
      value: "e_23",
      label: "Mecánica de Mantención de Aeronaves",
    },
    {
      id: "e_24",
      value: "e_24",
      label: "Mecánica Extractiva",
    },
    {
      id: "e_25",
      value: "e_25",
      label: "Montaje Industrial",
    },
    {
      id: "e_26",
      value: "e_26",
      label: "Muebles y Terminaciones en Madera",
    },
    {
      id: "e_27",
      value: "e_27",
      label: "Operaciones Portuarias",
    },
    {
      id: "e_28",
      value: "e_28",
      label: "Pesquería",
    },
    {
      id: "e_29",
      value: "e_29",
      label: "Programación",
    },
    {
      id: "e_30",
      value: "e_30",
      label: "Química Industrial",
    },
    {
      id: "e_31",
      value: "e_31",
      label: "Refrigeración y Climatización",
    },
    {
      id: "e_32",
      value: "e_32",
      label: "Servicios de Hotelería",
    },
    {
      id: "e_33",
      value: "e_33",
      label: "Servicios de Turismo",
    },
    {
      id: "e_34",
      value: "e_34",
      label: "Telecomunicaciones",
    },
    {
      id: "e_35",
      value: "e_35",
      label: "Tripulación de Naves Mercantes y Especiales",
    },
    {
      id: "e_36",
      value: "e_36",
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
  