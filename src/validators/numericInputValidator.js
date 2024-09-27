export function numericInputValidator(input) {
  for (let i = 0; i < input.length; i++) {
    if (isNaN(+input.charAt(i))) {
      return { valid: false, message: "Ingrese solamente numeros" };
    }
  }
  return { valid: true };
}
