const certificadosIngles = [
  {
    id: "c1",
    value: "c1",
    label: "Association of Language Testers in Europe (ALTE)",
  },
  {
    id: "c2",
    value: "c2",
    label: "Cambridge English Language Assesment",
  },
  {
    id: "c3",
    value: "c3",
    label: "Common European Framework of Reference for Language",
  },
  {
    id: "c4",
    value: "c4",
    label: "International English Languaje Testing System (IELTS)",
  },
  {
    id: "c5",
    value: "c5",
    label: "Test of English as a Foreing Language (TOEFL)",
  },
  {
    id: "c6",
    value: "c6",
    label: "Test of English for International Comumunication (TOEIC)",
  },
  {
    id: "c7",
    value: "c7",
    label: "No posee certificación",
  },
  {
    id: "c8",
    value: "c8",
    label: "Otra (especificar)",
    events: [
      {
        target: "otro-ingles",
        payload: {
          visible: true,
        },
      },
    ],
  },
];

export function getCertificadosIngles() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(certificadosIngles);
      }, 0);
    });
  }
  