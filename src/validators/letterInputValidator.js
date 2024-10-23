export function letterInputValidator(input) {
  input = input.replaceAll(" ", "");
  for (let i = 0; i < input.length; i++) {
    if (!isCharacterALetter(input.charAt(i))) {
      return { valid: false, message: "Ingrese solamente letras y espacios" };
    }
  }
  return { valid: true };
}

function isCharacterALetter(char) {
  return /\p{L}/u.test(char);
}
