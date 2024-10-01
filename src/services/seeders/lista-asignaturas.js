const asignaturas_EDD24 = [
  {
    id: 1059,
    value: 1059,
    label: "Educación Parvularia",
  },
  {
    id: 1058,
    value: 1058,
    label: "Generalista",
  },
  {
    id: 1008,
    value: 1008,
    label: "Artes Visuales",
  },
  {
    id: 1061,
    value: 1061,
    label: "Ciencias Naturales",
    events: [
      {
        target: "id_nivel_asignatura_basica_media",
        payload: {
          visible: true,
          items: [
            {
              id: 1074,
              value: 1074,
              label: "Educación Básica 1°a 6° y Adultos",
            },
            {
              id: 1075,
              value: 1075,
              label: "7°a 8°, Educación Media y Adultos",
              events: [
                {
                  target: "asignaturas_ciencia",
                  payload: {
                    items: [
                      {
                        id: "Ciencias para la Ciudadanía",
                        value: "Ciencias para la Ciudadanía",
                        label: "Ciencias para la Ciudadanía",
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 1060,
    value: 1060,
    label: "Educación Física y Salud",
  },
  {
    id: 1027,
    value: 1027,
    label: "Francés",
  },
  {
    id: 1014,
    value: 1014,
    label: "Historia, Geografía y Ciencias Sociales",
    events: [
      {
        target: "id_nivel_asignatura_basica_media",
        payload: {
          visible: true,
          items: [
            {
              id: 1074,
              value: 1074,
              label: "Educación Básica 1°a 6° y Adultos",
            },
            {
              id: 1075,
              value: 1075,
              label: "7°a 8°, Educación Media y Adultos",
              events: [
                {
                  target: "experiencia_educacion_ciudadana",
                  payload: {
                    visible: true,
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 1016,
    value: 1016,
    label: "Inglés",
    events: [
      {
        target: "ingles_asignatura",
        payload: {
          visible: true,
        },
      },
    ],
  },
  {
    id: 1009,
    value: 1009,
    label: "Biología",
  },
  {
    id: 1013,
    value: 1013,
    label: "Física",
  },
  {
    id: 1012,
    value: 1012,
    label: "Filosofía",
  },
  {
    id: 1017,
    value: 1017,
    label: "Lenguaje y Comunicación",
    events: [
      {
        target: "id_nivel_asignatura_basica_media",
        payload: {
          visible: true,
          items: [
            {
              id: 1074,
              value: 1074,
              label: "Educación Básica 1°a 6° y Adultos",
            },
            {
              id: 1075,
              value: 1075,
              label: "7°a 8°, Educación Media y Adultos",
            },
          ],
        },
      },
    ],
  },
  {
    id: 1018,
    value: 1018,
    label: "Matemática",
    events: [
      {
        target: "id_nivel_asignatura_basica_media",
        payload: {
          visible: true,
          items: [
            {
              id: 1074,
              value: 1074,
              label: "Educación Básica 1°a 6° y Adultos",
            },
            {
              id: 1075,
              value: 1075,
              label: "7°a 8°, Educación Media y Adultos",
            },
          ],
        },
      },
    ],
  },
  {
    id: 1019,
    value: 1019,
    label: "Música",
  },
  {
    id: 1025,
    value: 1025,
    label: "Religión Católica",
  },
  {
    id: 1054,
    value: 1054,
    label: "Religión Evangélica",
  },
  {
    id: 1055,
    value: 1055,
    label: "Tecnología",
  },
  {
    id: 1020,
    value: 1020,
    label: "Química",
  },
  {
    id: 1011,
    value: 1011,
    label: "Educación Media Técnico Profesional",
    events: [
      {
        target: "especialidades-anios",
        payload: {
          visible: true,
        },
      },
      {
        target: "cantidad_modulos",
        payload: {
          visible: true,
        },
      },
      {
        target: "cursos_diferenciada",
        payload: {
          visible: true,
        },
      },
      {
        target: "id_tecnico_asignatura",
        payload: {
          visible: true,
        },
      },
    ],
  },
  {
    id: 1062,
    value: 1062,
    label: "Dificultades Específicas del Aprendizaje - Educación Especial",
  },
  {
    id: 1063,
    value: 1063,
    label: "Trastorno Específico del Lenguaje - Educación Especial",
  },
  {
    id: 1064,
    value: 1064,
    label: "Necesidades Educativas Especiales Permanentes",
    events: [
      {
        target: "discapacidad_auditiva",
        payload: {
          visible: true,
        },
      },
      {
        target: "lengua_senas",
        payload: {
          visible: true,
        },
      },
    ],
  },
  {
    id: 1149,
    value: 1149,
    label: "Educación en Contexto de Encierro",
    events: [
      {
        target: "contexto_encierro",
        payload: {
          visible: true,
        },
      },
    ],
  },
  {
    id: 1072,
    value: 1072,
    label: "Pedagogía Hospitalaria",
  },
  {
    id: 1073,
    value: 1073,
    label: "Sector Lengua Indígena",
    events: [
      {
        target: "lengua_asignatura",
        payload: {
          visible: true,
        },
      },
    ],
  },
];

export function getAsignaturasEDD24() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(asignaturas_EDD24);
    }, 0);
  });
}
