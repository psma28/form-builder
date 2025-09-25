export function numericInputValidator(input) {
  for (let i = 0; i < input.length; i++) {
    if (isNaN(+input.charAt(i))) {
      return { valid: false, message: "Ingrese solamente números" };
    }
  }
  return { valid: true };
}

export function minTelephoneLenghtValidator(input) {
  if (input.length<8) {
    return { valid: false, message: "Ingrese al menos 8 números" };
  }
  return { valid: true };
}
