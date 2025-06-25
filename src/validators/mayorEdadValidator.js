export function mayorEdadValidator(fechaNacimiento) {
  const currentDate = new Date();
  const birthDate = new Date(fechaNacimiento);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  if (month < birthMonth || (month === birthMonth && day < birthDay)) {
    age--;
  }

  return age >= 18
    ? { valid: true }
    : {
        valid: false,
        message:
          "Postulación permitida únicamente para personas mayores de edad",
      };
}

export function mayor21Validator(fechaNacimiento) {
  const currentDate = new Date();
  const birthDate = new Date(fechaNacimiento);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  if (month < birthMonth || (month === birthMonth && day < birthDay)) {
    age--;
  }

  return age >= 21
    ? { valid: true }
    : {
        valid: false,
        message:
          "Postulación permitida únicamente para personas mayores de 21 años",
      };
}
