const carreras = [
  {
    ADE: "Actuación y Teatro",
  },
  {
    ADE: "Administración de Empresas e Ing. Asociadas",
  },
  {
    ADE: "Administración Gastronómica",
  },
  {
    ADE: "Administración Pública",
  },
  {
    ADE: "Administración Turística y Hotelera",
  },
  {
    ADE: "Agronomía",
  },
  {
    ADE: "Antropología",
  },
  {
    ADE: "Arquitectura",
  },
  {
    ADE: "Artes y Licenciatura en Artes",
  },
  {
    ADE: "Biología Marina y Ecología Marina",
  },
  {
    ADE: "Bioquímica",
  },
  {
    ADE: "Ciencias Políticas",
  },
  {
    ADE: "Comunicación Audiovisual y/o Multimedia",
  },
  {
    ADE: "Construcción Civil",
  },
  {
    ADE: "Contabilidad con mención en Administración y Finanzas",
  },
  {
    ADE: "Contador Auditor",
  },
  {
    ADE: "Derecho",
  },
  {
    ADE: "Diseño",
  },
  {
    ADE: "Diseño de Ambientes e Interiores",
  },
  {
    ADE: "Diseño de Vestuario",
  },
  {
    ADE: "Diseño Gráfico",
  },
  {
    ADE: "Diseño Industrial",
  },
  {
    ADE: "Enfermería",
  },
  {
    ADE: "Fonoaudiología",
  },
  {
    ADE: "Fotografía",
  },
  {
    ADE: "Geografía",
  },
  {
    ADE: "Geología",
  },
  {
    ADE: "Ingeniería Agrícola",
  },
  {
    ADE: "Ingeniería Civil Ambiental",
  },
  {
    ADE: "Ingeniería Civil Bioquímica",
  },
  {
    ADE: "Ingeniería Civil Eléctrica",
  },
  {
    ADE: "Ingeniería Civil Electrónica",
  },
  {
    ADE: "Ingeniería Civil en Computación e Informática",
  },
  {
    ADE: "Ingeniería Civil en Minas",
  },
  {
    ADE: "Ingeniería Civil en Obras Civiles",
  },
  {
    ADE: "Ingeniería Civil Industrial",
  },
  {
    ADE: "Ingeniería Civil Mecánica",
  },
  {
    ADE: "Ingeniería Civil Metalúrgica",
  },
  {
    ADE: "Ingeniería Civil Química",
  },
  {
    ADE: "Ingeniería Civil, plan común y licenciatura en Ciencias de la Ingeniería",
  },
  {
    ADE: "Ingeniería Comercial",
  },
  {
    ADE: "Ingeniería en Alimentos",
  },
  {
    ADE: "Ingeniería en Automatización, Instrumentación y ",
  },
  {
    ADE: "Ingeniería en Biotecnología y Bioingeniería",
  },
  {
    ADE: "Ingeniería en Comercio Exterior",
  },
  {
    ADE: "Ingeniería en Computación e Informática",
  },
  {
    ADE: "Ingeniería en Conectividad y Redes",
  },
  {
    ADE: "Ingeniería en Construcción",
  },
  {
    ADE: "Ingeniería en Control de Gestión",
  },
  {
    ADE: "Ingeniería en Ejecución en RRHH",
  },
  {
    ADE: "Ingeniería en Electricidad",
  },
  {
    ADE: "Ingeniería en Electrónica",
  },
  {
    ADE: "Ingeniería en Finanzas",
  },
  {
    ADE: "Ingeniería en Geomensura y Cartografía",
  },
  {
    ADE: "Ingeniería en Gestión Pública",
  },
  {
    ADE: "Ingeniería en Logística",
  },
  {
    ADE: "Ingeniería en Marketing",
  },
  {
    ADE: "Ingeniería en Matemática y Estadística",
  },
  {
    ADE: "Ingeniería en Mecánica Automotriz",
  },
  {
    ADE: "Ingeniería en Medio Ambiente",
  },
  {
    ADE: "Ingeniería en Minas y Metalurgia",
  },
  {
    ADE: "Ingeniería en Prevención de Riesgos",
  },
  {
    ADE: "Ingeniería en Química",
  },
  {
    ADE: "Ingeniería en Recursos Humanos",
  },
  {
    ADE: "Ingeniería en Recursos Renovables",
  },
  {
    ADE: "Ingeniería en Refrigeración y Climatización",
  },
  {
    ADE: "Ingeniería en Seguridad Privada",
  },
  {
    ADE: "Ingeniería en Sonido",
  },
  {
    ADE: "Ingeniería en Telecomunicaciones",
  },
  {
    ADE: "Ingeniería en Transporte y Tránsito",
  },
  {
    ADE: "Ingeniería Forestal",
  },
  {
    ADE: "Ingeniería Industrial",
  },
  {
    ADE: "Ingeniería Marina y Marítimo Portuaria",
  },
  {
    ADE: "Ingeniería Mecánica",
  },
  {
    ADE: "Ingeniería Naval",
  },
  {
    ADE: "Kinesiología",
  },
  {
    ADE: "Licenciatura en Letras y Literatura",
  },
  {
    ADE: "Matemáticas y/o Estadísticas",
  },
  {
    ADE: "Medicina",
  },
  {
    ADE: "Medicina Veterinaria",
  },
  {
    ADE: "Música, Canto o Danza",
  },
  {
    ADE: "Nutrición y Dietética",
  },
  {
    ADE: "Obstetricia y Puericultura",
  },
  {
    ADE: "Odontología",
  },
  {
    ADE: "Pedagogía en Artes y Música",
  },
  {
    ADE: "Pedagogía en Ciencias",
  },
  {
    ADE: "Pedagogía en Educación Básica",
  },
  {
    ADE: "Pedagogía en Educación de Párvulos",
  },
  {
    ADE: "Pedagogía en Educación Diferencial",
  },
  {
    ADE: "Pedagogía en Educación Física",
  },
  {
    ADE: "Pedagogía en Educación Media",
  },
  {
    ADE: "Pedagogía en Filosofía y Religión",
  },
  {
    ADE: "Pedagogía en Historia, Geografía y Ciencias Sociales",
  },
  {
    ADE: "Pedagogía en Idiomas",
  },
  {
    ADE: "Pedagogía en Lenguaje, Comunicación y/o Castellano",
  },
  {
    ADE: "Pedagogía en Matemáticas y Computación",
  },
  {
    ADE: "Periodismo",
  },
  {
    ADE: "Programas de Formación Pedagógica",
  },
  {
    ADE: "Psicología",
  },
  {
    ADE: "Psicopedagogía",
  },
  {
    ADE: "Publicidad",
  },
  {
    ADE: "Química Ambiental",
  },
  {
    ADE: "Química y Farmacia",
  },
  {
    ADE: "Química, Licenciado en Química",
  },
  {
    ADE: "Realizador de Cine y Televisión",
  },
  {
    ADE: "Relaciones Públicas",
  },
  {
    ADE: "Secretariado Bilingüe",
  },
  {
    ADE: "Sociología",
  },
  {
    ADE: "Técnico Agente o Visitador Médico",
  },
  {
    ADE: "Técnico Agropecuario",
  },
  {
    ADE: "Técnico Asistente del Educador de Párvulos",
  },
  {
    ADE: "Técnico Asistente del Educador Diferencial",
  },
  {
    ADE: "Técnico Dental y Asistente de Odontología",
  },
];

export function getCarreras() {
  const list = [];
  carreras.forEach((item) => {
    const itemName = item.ADE;
    list.push({ id: itemName, label: itemName, value: itemName });
  });
  list.push({
    id: "Otro",
    value: "Otro",
    label: "Otro",
    events: [
      {
        target: "profesion_text",
        payload: { visible: true },
      },
    ],
  });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(list);
    }, 0);
  });
}
