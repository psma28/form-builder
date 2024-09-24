/**
 * Formats text <input> field to the RUT format
 * @param {input: String} input
 * @returns String
 */
export function RUTFormatter(input) {
  const letters = getValue(input).split("");

  if (input.length > 1) {
    letters.splice(-1, 0, "-");
  }
  if (input.length > 5) {
    letters.splice(-5, 0, ".");
  }
  if (input.length > 9) {
    letters.splice(-9, 0, ".");
  }
  return letters.join("");
}

/**
 * Gets the RUT <input> field dotless and hyphenless form
 * @param {input: String} input
 * @returns String
 */
export function getValue(input) {
  let out = "";
  const filtro = "1234567890kK";

  for (let i = 0; i < input.length; i++) {
    if (filtro.indexOf(input.charAt(i)) !== -1) {
      if (out.length < 9) {
        out += input.charAt(i);
      }
    }
  }
  return out;
}
