export function letterInputValidator(input) {
  input = input.replace(" ", "");
  for (let i = 0; i < input.length; i++) {
    if (!isCharacterALetter(input.charAt(i))) {
      return { valid: false, message: "Ingrese solamente letras y espacios" };
    }
  }
  return { valid: true };
}

function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char);
}
