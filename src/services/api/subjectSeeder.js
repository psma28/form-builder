const asignaturas = [
    { id: 1076, name: "Administración", value: "administracion" },
    { id: 1077, name: "Agropecuario", value: "agropecuario" },
    { id: 1078, name: "Alimentación", value: "alimentacion" },
    { id: 1079, name: "Confección", value: "confeccion" },
    { id: 1080, name: "Construcción", value: "construccion" },
    { id: 1081, name: "Electricidad", value: "electricidad" },
    { id: 1082, name: "Gráfico", value: "grafico" },
    { id: 1083, name: "Hotelería y Turismo", value: "hoteleria y turismo" },
    { id: 1084, name: "Maderero", value: "maderero" },
    { id: 1085, name: "Marítimo", value: "maritimo" },
    { id: 1086, name: "Metalmecánica", value: "metalmecanica" },
    { id: 1087, name: "Minero", value: "minero" },
    { id: 1088, name: "Química E industria", value: "quimica e industria" },
    { id: 1089, name: "Salud y Educación", value: "salud y educacion" },
    { id: 1090, name: "Tecnología y Comunicaciones", value: "tecnologia y comunicaciones" },
  ];
  
  export function getSubjects() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(asignaturas);
      }, 0);
    });
  }