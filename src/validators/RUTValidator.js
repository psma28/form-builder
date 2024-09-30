const factors = [2, 3, 4, 5, 6, 7, 2, 3];

/**
 * Validates the RUT.
 * @param {*} value
 * @returns
 */
export function validateRUT(value) {
  const digits = value.split("");
  const verifyingDigit = digits[digits.length - 1];
  digits.splice(-1);
  let check = 11 - (calculateDigitToCheck(digits) % 11);
  if (check === 11) check = 0;
  if (check === 10) {
    check = "K";
    return check === verifyingDigit.toUpperCase();
  }
  return check === +verifyingDigit;
}

/**
 * Multiplies the RUT digits in reverse order by every element of the
 * factor list and then returns the total sum of those results.
 * @param {Array} digits
 * @returns Number
 */
function calculateDigitToCheck(digits) {
  let result = 0;
  let factorIndex = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    result += digits[i] * factors[factorIndex];
    factorIndex++;
  }
  return result;
}
