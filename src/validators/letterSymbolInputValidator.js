export function letterSymbolInputValidator(input) {
  // Quitamos los espacios antes de validar (opcional según el caso)
  input = input.replaceAll(" ", "");
  for (let i = 0; i < input.length; i++) {
    if (!isCharacterAllowed(input.charAt(i))) {
      return {
        valid: false,
        message: "Ingrese solamente letras, espacios, guiones o diéresis",
      };
    }
  }
  return { valid: true };
}

function isCharacterAllowed(char) {
  // Permitir letras (\p{L}), guiones (-), y diéresis (')
  return /\p{L}|[-']/u.test(char);
}
